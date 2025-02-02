"use client";

import { Server } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";


interface ApiAlertProps {
    title: string;
    description: string;
    variant: "public" | "admin";
}

// Correct usage of the type for the keys of the object
const textMap: Record<ApiAlertProps["variant"], string> = {
    public: "Public",
    admin: "Admin"
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
    public: "secondary",
    admin: "destructive"
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
    title,
    description,
    variant = "public",
}) => {
    const onCopy = () => {
        // copy and add to the clipboard
        navigator.clipboard.writeText(description);
        // toast message
        toast.success('Route API copiée dans le Presse-papier.');
    }

    return (
        <Alert className="mb-4 dark:bg-[#1e1e1e] bg-gray-500/10 dark:border-gray-500/30 rounded-sm">
            <Server className="h-4 w-4" />
            <AlertTitle className="flex items-center gap-x-2">
                {title}
                <Badge variant={variantMap[variant]}>
                    {textMap[variant]}
                </Badge>
            </AlertTitle>
            <AlertDescription className="mt-4 flex items-center justify-between">
                <code className="relative rounded-sm bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold dark:bg-black/20">
                    {description}
                </code>
                <Button variant="outline" size="icon" onClick={onCopy}>
                    <Copy className="h-4 w-4" />
                </Button>
            </AlertDescription>
        </Alert>
    );
};
