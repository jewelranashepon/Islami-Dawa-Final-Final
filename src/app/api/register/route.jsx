// import fs from "fs";
// import path from "path";
// import bcrypt from "bcrypt";

// const userDataPath = path.join(process.cwd(), "/src/app/data/userData.jsx"); // Update this path to where your userData file is located

// export async function POST(req) {
//   const {
//     name,
//     email,
//     password,
//     role,
//     division,
//     district,
//     upazila,
//     tunion,
//     markaz,
//     phoneNumber,
//   } = await req.json();

//   console.log("Received data:", {
//     name,
//     role,
//     email,
//     password,
//     division,
//     district,
//     upazila,
//     tunion,
//     phoneNumber,
//     markaz,
//   });

//   // Basic validation
//   if (!name || !email || !password || !role) {
//     return new Response("All fields are required", { status: 400 });
//   }

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Read the existing user data file
//     const userDataFile = fs.readFileSync(userDataPath, "utf-8");
//     const userData = JSON.parse(userDataFile);

//     // Generate a new user object in the desired format
//     const newUser = {
//       id: Date.now(), // or any unique ID generation logic you prefer
//       name,
//       category: role, // assuming 'role' corresponds to 'category'
//       division,
//       district,
//       upazila,
//       union: tunion, // 'union' is taken from 'tunion'
//       area: markaz, // 'markaz' corresponds to 'area'
//       phone: phoneNumber,
//       email,
//       passwordHash: hashedPassword,
//     };

//     // Save the new user in the userData object
//     userData[email] = newUser;

//     // Write the updated userData back to the file
//     fs.writeFileSync(userDataPath, JSON.stringify(userData, null, 2), "utf-8");

//     console.log("New user added:", newUser);
//     return new Response(JSON.stringify(newUser), { status: 201 });
//   } catch (error) {
//     console.log(error);
//     return new Response("User creation failed", { status: 500 });
//   }
// }
