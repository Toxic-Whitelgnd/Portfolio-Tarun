import img1 from "../../images/Projectnewimg/encrypdecryppy.jpg"
import img2 from "../../images/Projectnewimg/encdecfs.jpg"
import img3 from "../../images/Projectnewimg/fastshare.jpg"
import img4 from "../../images/Projectnewimg/encdecmob.jpg"
import img5 from "../../images/Projectnewimg/entryexitqr.jpg"
import img6 from "../../images/Projectnewimg/portfolio.jpg"
import img7 from "../../images/Projectnewimg/todo.jpg"
import img8 from "../../images/Projectnewimg/clgclubs.jpg"
import img9 from "../../images/Projectnewimg/ecommerceanime.jpg"

const projects = [
    {
        id:1,
        name:"Encryp-Decryp",
        languages:'python',
        description:"To encrypt your text, passwords, and other data, you'll need to utilise encryption and decryption.It is a platform that runs on Windows.",
        img:img1,
        website:"https://toxic-whitelgnd.github.io/EncrypDecrypWeb/",
        sourcecode:"https://github.com/Toxic-Whitelgnd/Encryption",
        based:"tkinter"
    },
    {
        id:2,
        name:"Encryp-Decryp",
        languages:'FullStack',
        img:img2,
        website:"https://toxic-whitelgnd.github.io/Encry_Decry_html/",
        sourcecode:"https://github.com/Toxic-Whitelgnd/Encry_Decry_html",
        description:"Encryption and decryption are used to encrypt and decrypt your text, passwords, and other sensitive information.It is Website runs on network.",
        based:"Html,CSS,JavaScript,Firebase"
    },
    {
        id:3,
        name:"FastShare",
        languages:"python",
        img:img3,
        website:"https://toxic-whitelgnd.github.io/FastShareWEB-Deploy/",
        sourcecode:"https://github.com/Toxic-Whitelgnd/FastShare",
        description:"This was my Python Bengining Project, and it was used to share your information with a QR code. Tkinter was used to create this page.",
        based:"tkinter,QRcode"

    },
    {
        id:4,
        name:"EncDec-Mobile",
        img:img4,
        languages:"dart",
        website:"https://toxic-whitelgnd.github.io/encrypdecrypmobile-deploy/",
        sourcecode:"https://github.com/Toxic-Whitelgnd/Encryp_Decryp_Android",
        description:"It works on mobile APPs produced with Flutter on 2.02.2022 in the same way that encryption and decryption do with my previous projects.",
        based:"Flutter",

    },
    {
        id:5,
        name:"Entry_Exit_QR",
        img:img5,
        languages:"python",
        website:"https://toxic-whitelgnd.github.io/entryexitweb-deploy/",
        sourcecode:"https://github.com/Toxic-Whitelgnd/Entry_Exit_QR",
        description:"Students leave and enter institutions, which is only recorded in books, thus we developed software that allows Universities to view their data in a firebase of student entry and exit utilising python.",
        based:"QRcode,Firebase,openIV",

    },
    {
        id:6,
        name:"Portfolio-old",
        img:img6,
        languages:"Frontend",
        website:"https://toxic-whitelgnd.github.io/portfolio-deploy/",
        sourcecode:"",
        description:"My first ReactJS project, i.e I have build a portfolio and learnt how to use react framework , API and Components",
        based:"ReactJS,CSS,HTML",

    },
    {
        id:7,
        name:"ToDo-App",
        img:img7,
        languages:"python",
        website:"https://github.com/Toxic-Whitelgnd/TodoWeb/tree/main",
        sourcecode:"https://github.com/Toxic-Whitelgnd/TodoWeb/tree/main",
        description:"ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list.",
        based:"Django,Sql,Scss",

    },
    {
        id:8,
        name:"Collage-Clubs",
        img:img8,
        languages:"Frontend",
        website:"https://toxic-whitelgnd.github.io/college-clubs/",
        sourcecode:"https://github.com/Toxic-Whitelgnd/college-clubs",
        description:"A website that lists the clubs that are available at the college and allows new students to browse and join them is used to advertise the groups there.",
        based:"ReactJS,Html,Css,EmailJS",

    },
    {
        id:9,
        name:"EcommerceAnime",
        img:img9,
        languages:"FullStack",
        website:"https://anime-ecommerce.vercel.app/",
        sourcecode:"https://github.com/Toxic-Whitelgnd/anime-ecommerce",
        description:"A E-Commerce Website a Big Dream of my Life to make it. Yay I made it atleast to the basic level!.",
        based:"NextJS,react,StripeJS,Sanity,Firebase",

    },

];

export default projects;