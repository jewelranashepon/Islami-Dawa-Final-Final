import fs from "fs"
import path from "path"

const amoliDataPath = path.join(process.cwd(), "/src/app/data/amoli_muhasaba_user_data.jsx"); 

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
      });

      // Basic validation
  if (!tahajjud || !ayat || !zikir || !ishraq || !jamat || !sirat || !Dua || !ilm || !tasbih || !dayeeAmol || !amoliSura || !ayamroja || !hijbulBahar) {
    return new Response("All fields are required", { status: 400 });
  }

  try{
     // Read the userData file as plain text
        const fileContent = fs.readFileSync(userDataPath, "utf-8");

        
    // Create a new user object
    const newUser = {
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
  

  }
  catch(error){
    console.log(error);

  }
    
}

