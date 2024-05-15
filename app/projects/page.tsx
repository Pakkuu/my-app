import Project from "../components/Project";

export default function Projects() {
  return (
    <>
      <Project 
        title="SAGE" 
        images={["/sage1.png", "/sage2.png", "/sage3.png", "/sage4.png"]}
        skills="AWS S3, AWS DynamoDB, AWS Lambda, AWS Textract, React, Python, Pinecone, LangChain" 
        desc="An AI-powered advising and guidance system designed to help students navigate through the difficult academic maze. The two main features are a chatbot to answer student's questions, and also a degree plan generator that provides a student with a complete timeline of their college classes that they have left to complete based on their major."
      />
      <Project  
        title="SlideScribe" 
        images={["/ss1.png", "/ss2.png"]}
        skills="Python, HTML, CSS, JavaScript, Flask"
        desc="SlideScribe is a web app that  aids students in their lecture comprehension. The program utilizes Google’s Vision AI as an OCR Engine for transcribing text from uploaded images of lecture slides. Users can have the text read out loud with synchronized text-highlighting, and also have a summarized notes text file generated using OpenAI's api." 
      />
    </>
  );
};  