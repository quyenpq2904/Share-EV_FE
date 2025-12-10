interface IUser {
  id: string;
  username: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  avatar: string;
  bio: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
}

enum UserStatus {
  UNVERIFIED = "UNVERIFIED",
  VERIFIED = "VERIFIED",
  BANNED = "BANNED",
}

enum UserRole {
  USER = "USER",
  STAFF = "STAFF",
  OPERATOR = "OPERATOR",
  ADMIN = "ADMIN",
}

export { type IUser, UserRole, UserStatus };
