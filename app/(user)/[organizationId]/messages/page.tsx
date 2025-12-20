"use client";

import { Avatar, Button, ScrollShadow, Textarea, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";

// Mock Data for the single group chat
const organizationChat = {
  id: "org-group",
  name: "Co-owners Group",
  members: [
    { id: "me", name: "You", avatar: "https://i.pravatar.cc/150?u=me" },
    { id: "u1", name: "Jane Doe", avatar: "https://i.pravatar.cc/150?u=u1" },
    {
      id: "u2",
      name: "Alex (Broker)",
      avatar: "https://i.pravatar.cc/150?u=u2",
    },
    { id: "u3", name: "Mark", avatar: "https://i.pravatar.cc/150?u=u3" },
  ],
  messages: [
    {
      id: "m1",
      senderId: "u1",
      content: "Has everyone voted on the new schedule proposal?",
      timestamp: "10:30 AM",
      type: "text",
    },
    {
      id: "m2",
      senderId: "u3",
      content: "I just cast my vote. Looks good to me.",
      timestamp: "10:35 AM",
      type: "text",
    },
    {
      id: "m3",
      senderId: "me",
      content: "I'll review it tonight. Thanks for the reminder!",
      timestamp: "11:00 AM",
      type: "text",
    },
    {
      id: "m4",
      senderId: "u2",
      content: "Great, let's try to finalize this by Friday.",
      timestamp: "11:15 AM",
      type: "text",
    },
  ],
};

function OrganizationMessagesPage() {
  const [messages, setMessages] = useState(organizationChat.messages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      id: `m${Date.now()}`,
      senderId: "me",
      content: newMessage,
      timestamp: "Now",
      type: "text",
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="h-[calc(100vh-9rem)] flex flex-col">
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="text-3xl font-bold text-default-900">Messages</h1>
        <p className="text-default-500">
          Chat with other co-owners of this organization.
        </p>
      </div>

      <div className="flex-1 flex flex-col bg-content1 border border-default-200 rounded-xl overflow-hidden shadow-sm">
        {/* Chat Header */}
        <div className="h-16 border-b border-default-200 flex items-center justify-between px-6 shrink-0 bg-default-50/50">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3 rtl:space-x-reverse">
              {organizationChat.members
                .filter((m) => m.id !== "me")
                .map((member) => (
                  <Avatar
                    key={member.id}
                    src={member.avatar}
                    size="sm"
                    isBordered
                    className="cursor-pointer"
                  />
                ))}
            </div>
            <div>
              <h3 className="font-bold text-default-900">
                {organizationChat.name}
              </h3>
              <p className="text-xs text-default-500">
                {organizationChat.members.length} members
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <Button
              isIconOnly
              variant="light"
              className="text-default-400 hover:text-default-900"
            >
              <Icon icon="solar:menu-dots-bold" className="text-xl" />
            </Button>
          </div>
        </div>

        {/* Chat Messages */}
        <ScrollShadow className="flex-1 p-6 space-y-1">
          {messages.map((msg, index) => {
            const isMe = msg.senderId === "me";
            const sender = organizationChat.members.find(
              (m) => m.id === msg.senderId
            ) || { name: "Unknown", avatar: "" };

            const nextMsg = messages[index + 1];
            const isLastInSequence =
              !nextMsg || nextMsg.senderId !== msg.senderId;
            const isFirstInSequence =
              index === 0 || messages[index - 1].senderId !== msg.senderId;

            return (
              <div
                key={msg.id}
                className={`flex gap-3 items-end ${
                  isMe ? "flex-row-reverse" : "flex-row"
                } ${isLastInSequence ? "mb-4" : "mb-1"}`}
              >
                {!isMe && (
                  <div className="w-8 shrink-0 flex items-end justify-center">
                    {isLastInSequence ? (
                      <Tooltip content={sender.name} placement="top">
                        <Avatar src={sender.avatar} size="sm" />
                      </Tooltip>
                    ) : (
                      <div className="w-8" />
                    )}
                  </div>
                )}

                <div
                  className={`flex flex-col max-w-[70%] ${
                    isMe ? "items-end" : "items-start"
                  }`}
                >
                  <Tooltip
                    content={msg.timestamp}
                    placement={isMe ? "left" : "right"}
                    className="text-xs"
                  >
                    <div
                      className={`p-3 px-4 text-sm leading-relaxed shadow-sm ${
                        isMe
                          ? `bg-primary text-primary-foreground font-medium
                           ${
                             isLastInSequence
                               ? "rounded-br-none rounded-2xl"
                               : "rounded-2xl rounded-br-sm"
                           }
                           ${
                             !isFirstInSequence && !isLastInSequence
                               ? "rounded-r-sm"
                               : ""
                           }
                           ${
                             isFirstInSequence && !isLastInSequence
                               ? "rounded-tr-2xl rounded-br-sm"
                               : ""
                           }
                          `
                          : `bg-default-100 text-default-900
                           ${
                             isLastInSequence
                               ? "rounded-bl-none rounded-2xl"
                               : "rounded-2xl rounded-bl-sm"
                           }
                           ${
                             !isFirstInSequence && !isLastInSequence
                               ? "rounded-l-sm"
                               : ""
                           }
                           ${
                             isFirstInSequence && !isLastInSequence
                               ? "rounded-tl-2xl rounded-bl-sm"
                               : ""
                           }
                          `
                      }`}
                    >
                      {msg.content}
                    </div>
                  </Tooltip>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </ScrollShadow>

        {/* Input Area */}
        <div className="p-4 bg-default-50/50 border-t border-default-200">
          <Textarea
            value={newMessage}
            onValueChange={setNewMessage}
            minRows={1}
            maxRows={4}
            placeholder="Type your message..."
            variant="flat"
            classNames={{
              inputWrapper:
                "bg-background shadow-sm hover:bg-background focus-within:bg-background",
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-2">
              <Button isIconOnly size="sm" variant="light">
                <Icon
                  icon="solar:paperclip-linear"
                  className="text-xl text-default-500"
                />
              </Button>
              <Button isIconOnly size="sm" variant="light">
                <Icon
                  icon="solar:smile-circle-linear"
                  className="text-xl text-default-500"
                />
              </Button>
            </div>
            <Button
              size="sm"
              color="primary"
              className="font-bold px-6"
              endContent={<Icon icon="solar:plain-3-bold" />}
              onPress={handleSendMessage}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationMessagesPage;
