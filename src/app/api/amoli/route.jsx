import fs from "fs";
import path from "path";

const userDataPath = path.join(
  process.cwd(),
  "/src/app/data/amoliMuhasabaUserData.jsx"
);

export async function POST(req) {
  const {
    tahajjud,
    ayat,
    zikir,
    ishraq,
    jamat,
    sirat,
    Dua,
    ilm,
    tasbih,
    dayeeAmol,
    amoliSura,
    ayamroja,
    hijbulBahar,
    email,
  } = await req.json();

  console.log("Received data:", {
    tahajjud,
    ayat,
    zikir,
    ishraq,
    jamat,
    sirat,
    Dua,
    ilm,
    tasbih,
    dayeeAmol,
    amoliSura,
    ayamroja,
    hijbulBahar,
    email,
  });

  // Basic validation
  if (
    !email ||
    !tahajjud ||
    !ayat ||
    !zikir ||
    !ishraq ||
    !jamat ||
    !sirat ||
    !Dua ||
    !ilm ||
    !tasbih ||
    !dayeeAmol ||
    !amoliSura ||
    !ayamroja ||
    !hijbulBahar
  ) {
    return new Response("All fields are required", { status: 400 });
  }

  try {
    // Get the current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split("T")[0];

    // Read the existing user data file
    const fileContent = fs.readFileSync(userDataPath, "utf-8");

    // Parse existing data
    let userAmoliData = {};
    const startIndex = fileContent.indexOf("{");
    const endIndex = fileContent.lastIndexOf("}");
    if (startIndex !== -1 && endIndex !== -1) {
      const jsonString = fileContent.slice(startIndex, endIndex + 1);
      userAmoliData = eval(`(${jsonString})`);
    }

    // Ensure the user's data is organized by email
    if (!userAmoliData[email]) {
      userAmoliData[email] = {};
    }

    // Add form data under the current date
    userAmoliData[email][currentDate] = {
      tahajjud,
      ayat,
      zikir,
      ishraq,
      jamat,
      sirat,
      Dua,
      ilm,
      tasbih,
      dayeeAmol,
      amoliSura,
      ayamroja,
      hijbulBahar,
    };

    // Write the updated userData back to the file
    const updatedFileContent = `export const userAmoliData = ${JSON.stringify(
      userAmoliData,
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
