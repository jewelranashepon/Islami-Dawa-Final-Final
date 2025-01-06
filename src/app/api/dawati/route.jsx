import fs from "fs";
import path from "path";

const userDataPath = path.join(
  process.cwd(),
  "/src/app/data/dawatiBisoyUserData.jsx"
);

export async function POST(req) {
  const {
    nonMuslimDawat,
    murtadDawat,
    alemderSatheyMojlish,
    publicSatheyMojlish,
    nonMuslimSaptahikGasht,
    email,
  } = await req.json();

  console.log("Received data:", {
    nonMuslimDawat,
    murtadDawat,
    alemderSatheyMojlish,
    publicSatheyMojlish,
    nonMuslimSaptahikGasht,
    email,
  });


  // Basic validation
  if (
    !email ||
    !nonMuslimDawat ||
    !murtadDawat ||
    !alemderSatheyMojlish ||
    !publicSatheyMojlish ||
    !nonMuslimSaptahikGasht
  ) {
    return new Response("All fields are required", { status: 400 });
  }

  try {
    // Get the current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split("T")[0];

    // Read the existing user data file
    const fileContent = fs.readFileSync(userDataPath, "utf-8");

    // Parse existing data
    let userDawatiBisoyData = {};
    const startIndex = fileContent.indexOf("{");
    const endIndex = fileContent.lastIndexOf("}");
    if (startIndex !== -1 && endIndex !== -1) {
      const jsonString = fileContent.slice(startIndex, endIndex + 1);
      userDawatiBisoyData = eval(`(${jsonString})`);
    }

    // Ensure the user's data is organized by email
    if (!userDawatiBisoyData[email]) {
      userDawatiBisoyData[email] = {};
    }

    // Add form data under the current date
    userDawatiBisoyData[email][currentDate] = {
        nonMuslimDawat,
        murtadDawat,
        alemderSatheyMojlish,
        publicSatheyMojlish,
        nonMuslimSaptahikGasht,
    };

    // Write the updated userData back to the file
    const updatedFileContent = `export const userDawatiBisoyData = ${JSON.stringify(
      userDawatiBisoyData,
      null,
      2
    )};`;
    fs.writeFileSync(userDataPath, updatedFileContent, "utf-8");

    console.log("Data saved under date:", currentDate);
    return new Response(JSON.stringify([email][currentDate]), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response("Failed to save user data", { status: 500 });
  }
}
