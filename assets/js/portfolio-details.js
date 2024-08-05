// extract id from url
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);

const projects = [
    {
        "Title": "ShotPerfect",
        "Description": "ShotPerfect is an AI-driven platform designed to enhance cricket players' skills by analyzing their shots. The platform provides automated coaching, offering insights and feedback to help players refine their techniques and improve their overall performance.",
        "Category": "Web App",
        "Tagline": "Refine your batting skills with the help of AI."
    },
    {
        "Title": "Wheat Insight",
        "Description": "Wheat Insight utilizes satellite imagery and data analytics to monitor the health and growth of wheat crops. It helps farmers predict yield, optimize resource use, and make informed decisions to maximize crop productivity and sustainability.",
        "Category": "Agriculture/AI",
        "Tagline": "Empowering farmers with data-driven insights."
    },
    {
        "Title": "CrackPong",
        "Description": "CrackPong is a comprehensive solution for detecting and analyzing cracks and defects in infrastructure surfaces. It aids in early detection and assessment, enabling timely maintenance and preventing potential structural failures.",
        "Category": "Infrastructure/AI",
        "Tagline": "Predict the puck's path, place the crack, and score!"
    },
    {
        "Title": "Photo to Sketch",
        "Description": "Photo to Sketch is a creative tool that transforms photographs into various sketch styles. It offers users the ability to generate detailed and artistically styled sketches, catering to different preferences and enhancing creative expression.",
        "Category": "Creative/AI",
        "Tagline": "Turning your photos into unique sketches."
    },
    {
        "Title": "Baggage X-ray Image-Based Contraband Detection",
        "Description": "Contraband is a security system focused on detecting prohibited items in baggage through advanced image analysis. It enhances airport and facility security by accurately identifying contraband items and preventing their passage.",
        "Category": "Security/AI",
        "Tagline": "Ensuring safe travels with advanced baggage security."
    },
    {
        "Title": "Parkinson's Disease Detection",
        "Description": "This project aims to classify Parkinson's disease by analyzing voice data. It provides a non-invasive method for early detection and monitoring of the disease, aiding in timely medical intervention and management.",
        "Category": "Healthcare/AI",
        "Tagline": "Early detection of Parkinson's through voice analysis."
    },
    {
        "Title": "Heart Disease Classification",
        "Description": "The Heart Disease Classification project uses patient data to assess the risk of heart disease. It assists healthcare providers in identifying high-risk individuals, facilitating preventive care and targeted treatments.",
        "Category": "Healthcare/AI",
        "Tagline": "Predicting heart health for better patient care."
    },
    {
        "Title": "Anomaly Detection In Credit Card Fraud Dataset",
        "Description": "This solution addresses the problem of detecting fraudulent transactions in credit card datasets. It improves financial security by identifying anomalies and potential fraud, thereby protecting users and institutions.",
        "Category": "Finance/AI",
        "Tagline": "Securing your transactions with fraud detection."
    },
    {
        "Title": "Incremental Face Recognition",
        "Description": "Incremental Face Recognition is a dynamic system that continually learns to recognize new faces. It ensures high accuracy and up-to-date recognition capabilities, making it suitable for environments where personnel frequently change.",
        "Category": "Security/AI",
        "Tagline": "Recognizing faces with adaptive accuracy."
    },
    {
        "Title": "Supply Demand Forecasting of Uber Dataset",
        "Description": "This project focuses on predicting the supply and demand for ride-hailing services using Uber's dataset. It helps optimize fleet management and improve service efficiency by accurately forecasting demand patterns.",
        "Category": "Transportation/AI",
        "Tagline": "Optimizing ride-hailing services through accurate forecasting."
    },
    // {
    //     "Title": "Crack Pong",
    //     "Description": "Crack Pong is an interactive game that utilizes computer vision techniques. Players watch a live-rendered video of an air hockey game and must predict where the puck will pass to place a virtual crack, earning points for accurate predictions.",
    //     "Category": "Gaming/Computer Vision"
    // }
];


document.querySelector('.page-title h1').innerHTML = projects[id].Title;
document.querySelector('.portfolio-description p').innerHTML = projects[id].Description;

document.querySelector('.portfolio-info ul li:first-child').innerHTML  = `<strong>Category</strong>: ${projects[id].Category}`;
