"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import NavItems from "./NavItems";

function UserDropdown() {
  const router = useRouter();
  const handleLogout = async () => {
    router.push("/login");
  };

  const user = { name: "John Doe", email: "john.doe@example.com" };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-3 text-gray-4 hover:text-green-700"
          >
            <Avatar className="size-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-green-700 text-gray-50 font-medium text-sm">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col items-start">
              <span className="text-base font-medium text-gray-50">
                {user.name}
              </span>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-gray-400">
          <DropdownMenuLabel>
            <div className="flex relative items-center gap-3 py-2">
              <Avatar className="size-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-green-700 text-gray-50 font-medium text-sm">
                  {user.name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-base font-medium text-gray-400">
                  {user.name}
                </span>
                <span className="text-sm text-gray-400">{user.email}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-700" />
          <DropdownMenuItem
            onClick={handleLogout}
            className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-green-700 transition-colors cursor-pointer"
          >
            <LogOut className="size-4 mr-2 hidden sm:block" />
            Logout
          </DropdownMenuItem>
          <DropdownMenuSeparator className="hidden sm:block bg-gray-700" />
          <nav className="sm:hidden">
            <NavItems />
          </nav>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserDropdown;
