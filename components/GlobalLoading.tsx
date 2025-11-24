import { useAuthContext } from "@/contexts/AuthContext";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import Loading from "./Loading";

function GlobalLoading() {
  const { isLoading: isAuthLoading } = useAuthContext();
  const isMutating = useIsMutating();
  const isFetching = useIsFetching();

  const shouldShow = isAuthLoading || isMutating > 0 || isFetching > 0;

  if (!shouldShow) return null;

  return <Loading />;
}
export default GlobalLoading;
