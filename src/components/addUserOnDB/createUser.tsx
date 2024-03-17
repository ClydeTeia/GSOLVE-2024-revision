import { createData, readData } from "@/firebase/crud";
import { User } from "firebase/auth";

export async function createUser(user: User | null) {
  if (!user) {
    console.error("Invalid user object.");
    return;
  }

  const userId = user.uid;

  try {
    const existingUser = await readData("users", "userId", userId);

    if (!existingUser) {
      await createData("users", {
        email: user.email || "",
        username: user.displayName || "",
        userId: userId,
      });
      console.log(`User with ID ${userId} created.`);
    } else {
      console.log(`User with ID ${userId} already exists.`);
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
}
