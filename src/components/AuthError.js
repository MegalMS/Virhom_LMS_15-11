"use client";
import { useSearchParams } from "next/navigation";
import { AlertCircle } from "lucide-react";

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  if (!error) return null;

  const errorMessages = {
    OAuthSignin: "Error initiating OAuth sign in. Please try again.",
    OAuthCallback: "Error processing OAuth callback.",
    OAuthCreateAccount: "Could not create OAuth account.",
    EmailCreateAccount: "Could not create email account.",
    Callback: "Error in authentication callback.",
    OAuthAccountNotLinked: "Email already exists with another provider.",
    EmailSignin: "Check your email address.",
    CredentialsSignin: "Sign in failed. Check your credentials.",
    SessionRequired: "Please sign in to access this page.",
    Default: "An authentication error occurred.",
  };

  return (
    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
      <div className="flex items-center gap-2 text-red-800">
        <AlertCircle size={18} />
        <span className="text-sm font-medium">
          {errorMessages[error] || errorMessages.Default}
        </span>
      </div>
    </div>
  );
}