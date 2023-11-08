import smile from "../assets/smile-icon.svg";
import city from "../assets/city.svg";
import room from "../assets/room-icon.svg";
import users from "../assets/users.svg";
import apartments from "../assets/apartments.svg";
import locations from "../assets/locations.svg";
import application from "../assets/application.svg";
import inclusive from "../assets/inclusive.svg";
import assistance from "../assets/Assistance.svg";
import flexibility from "../assets/Flexibility.svg";
import stepOne from "../assets/Step 1.svg";
import stepTwo from "../assets/Step 2.svg";
import stepThree from "../assets/Step 3.svg";
import stepFour from "../assets/Step 4.svg";
import Nice from "../assets/nice.svg";
import Paris from "../assets/paris.svg";
import Florence from "../assets/florence.svg";
import Bologna from "../assets/Rectangle 49.svg";
import f1 from "../assets/voyageurs-invites-pleins-smileys-2.png";
import f2 from "../assets/voyageurs-invites-pleins-smileys-1.png";
import f3 from "../assets/voyageurs-invites-pleins-smileys.png";
import room_city from "../assets/bacdbb_723fc3ba38f34640b08464a29a8990c9_mv2-1.jpg"
import upload from "../assets/image-gallery.svg"
import payslip from "../assets/g2115.svg"
import certificate from "../assets/certificate.svg"
import groupId from "../assets/Groupe 1178.svg"
import inVoice from "../assets/invoice.svg"








// Navigation
export const NavTable = [
    {
        id: 1,
        href: "i-propose-an-apartment",
        name: "I PROPOSE AN APARTEMENT"
    },
    {
        id: 2,
        href: "Contact",
        name: "CONTACT"
    },
    {
        id: 3,
        href: "Faq",
        name: "FAQ"
    },
]

// reactions-homepage
export const IconsTable = [
    {
        id: 0,
        src: smile,
        count: "300+",
        content: "Happy flatmates"
    },
    {
        id: 1,
        src: city,
        count: "4",
        content: "cities"
    },
    {
        id: 2,
        src: room,
        count: "100+",
        content: "Rooms"
    },
    {
        id: 3,
        src: users,
        count: "25",
        content: "Average age"
    },
]

// ReasonsTable
export const ReasonsTable = [
    {
        id: 0,
        src: apartments,
        count: "Beautiful apartments",
        content: "Contemporary furniture, cosy decoration, and all amenities. Our architects strive to provide the best possible communal living experience"
    },
    {
        id: 1,
        src: locations,
        count: "Central locations",
        content: "All our apartments located in the most central and safe neighbourhoods with great access to shops and public transportation "
    },
    {
        id: 2,
        src: application,
        count: "Quick application",
        content: "Browse the availabilities, do a virtual viewing and instantly submit your application."
    },
    {
        id: 3,
        src: inclusive,
        count: "All inclusive",
        content: "Rent includes cleaning of the communal areas, service charge and bills, so that you don’t have to deal with the paperwork."
    },
    {
        id: 4,
        src: assistance,
        count: "Assistance",
        content: "Any problem? At any point before or during your stay you can contact our service desk to report maintenance issues, ask general questions etc. "
    },
    {
        id: 5,
        src: flexibility,
        count: "Flexibility",
        content: "Most of our apartments can be booked for a minimum of just a couple of months"
    }
]

// StepsTable
export const StepsTable = [
    {
        id: 0,
        src: stepOne,
        count: "Step 1",
        content: "Find your room"   
    },
    {
        id: 1,
        src: stepTwo,
        count: "Step 2",
        content: "Send your booking request which will be reviewed by our team  "
    },
    {
        id: 2,
        src: stepThree,
        count: "Step 3",
        content: "View and sign your tenancy agreement . "
    },
    {
        id: 3,
        src: stepFour,
        count: "Step 4",
        content: "Move in the day and time of your choice"
    }
]

// ExploreCitiesTable
export const ExploreCitiesTable = [
    {
        id:0,
        src: Nice,
        city:"Nice",
        count: 12
    },
    {
        id:1,
        src: Paris,
        city:"Paris",
        count: 12
    }, {
        id:2,
        src: Florence,
        city:"Florence",
        count: 12
    }, {
        id:3,
        src: Bologna,
        city:"Bologna",
        count: 12
    }
]

// FeedbackTable
export const FeedbacksTable = [
    {
        id:0,
        src: f1,
        name:"Nom et prenom",
        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter "
    },
     {
        id:1,
        src: f2,
        name:"Nom et prenom",
        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter "
    },
     {
        id:2,
        src: f3,
        name:"Nom et prenom",
        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter "
    },
]


// CribsTable
export const CribesTable =[
    {
        id:0,
        src: [
        {
            id:0,
            src_room:room_city
        },
        {
            id:1,
            src_room:room_city
        },
        {
            id:2,
            src_room:room_city
        },
        {
            id:3,
            src_room:room_city
        }
    ],
        name:"Nom et prenom",
        content: "12 Villebois Mareuil - Chambre 2 ",
        adress: "47 rue Pierre Audry, 69009 Lyon",
        price: "574$"
    },
    {
        id:1,
        src: [
            {
                id:0,
                src_room:room_city
            },
            {
                id:1,
                src_room:room_city
            },
            {
                id:2,
                src_room:room_city
            },
            {
                id:3,
                src_room:room_city
            }
        ],
        name:"Nom et prenom",
        content: "12 Villebois Mareuil - Chambre 2 ",
        adress: "47 rue Pierre Audry, 69009 Lyon",
        price: "574$"

    },
    {
        id:2,
        src: [
            {
                id:0,
                src_room:room_city
            },
            {
                id:1,
                src_room:room_city
            },
            {
                id:2,
                src_room:room_city
            },
            {
                id:3,
                src_room:room_city
            }
        ],
        name:"Nom et prenom",
        content: "12 Villebois Mareuil - Chambre 2 ",
        adress: "47 rue Pierre Audry, 69009 Lyon",
        price: "574$"

    },
    {
        id:3,
        src: [
            {
                id:0,
                src_room:room_city
            },
            {
                id:1,
                src_room:room_city
            },
            {
                id:2,
                src_room:room_city
            },
            {
                id:3,
                src_room:room_city
            }
        ],
        name:"Nom et prenom",
        content: "12 Villebois Mareuil - Chambre 2 ",
        adress: "47 rue Pierre Audry, 69009 Lyon",
        price: "574$"

    },
    {
        id:4,
        src: [
            {
                id:0,
                src_room:room_city
            },
            {
                id:1,
                src_room:room_city
            },
            {
                id:2,
                src_room:room_city
            },
            {
                id:3,
                src_room:room_city
            }
        ],
        name:"Nom et prenom",
        content: "12 Villebois Mareuil - Chambre 2 ",
        adress: "47 rue Pierre Audry, 69009 Lyon",
        price: "574$"
    },
    {
        id:5,
        src: [
            {
                id:0,
                src_room:room_city
            },
            {
                id:1,
                src_room:room_city
            },
            {
                id:2,
                src_room:room_city
            },
            {
                id:3,
                src_room:room_city
            }
        ],
        name:"Nom et prenom",
        content: "12 Villebois Mareuil - Chambre 2 ",
        adress: "47 rue Pierre Audry, 69009 Lyon",
        price: "574$"

    },

]

// UploadTable
export const UploadArray = [
    {
        id:0,
        heading: " Looking to speed up the booking process?  Save time by completing your file now(optional)",
        src: upload,
        content: "Upload identity card"
    },

    {
        id:1,
        heading: "Are you a student?",
        src: certificate,
        content: "image-gallery.svg"
    },

    {
        id:2,
        heading: "",
        src: groupId,
        content: "Your guarantor’s ID"
    },
    {
        id:3,
        heading: "",
        src: payslip,
        content: "Your guarantor’s last payslip or tax return"
    },
    {
        id:4,
        heading: "Are you a professional ?",
        src: inVoice,
        content: "Upload your last payslip or tax declaration"
    }
]


// FaqspageTableRenting
export const FaqspageTableRenting = [
{
    id:0,
    title:"Before you book",
    subTitles:[
        {
        id:0,
        title:"I could not find availabilities for my dates, what should I do?",
        answer:"<p>You can <a class='link' href='#create_alert'>set up an alert</a> by specifying your desired move-in date, and we will promptly notify you as soon as we have available rooms. Please bear in mind that our availabilities typically become clear 2-3 months in advance. So, if you're planning to move in, let's say, six months from now, and there are currently no listed availabilities on our website, it's highly likely that we'll be able to confirm new openings as they become available 2-3 months prior to your intended move-in date.</p>",  
        src:""
    },
    {
        id:1,
        title:"What types of documents do you require to book a room?", 
        answer:`<p>When you submit your application, we'll require specific documents based on your status:</p>
        <ul class='first-level'><li><strong>For Students</strong>:<ul class='second-level'><li><strong>You</strong>: copy of ID or passport, phone number, email address, and a certificate of school enrollment.</li>
        <li><strong>Your Guarantor</strong>: copy of ID or passport, last payslip or last tax filing. If you don’t have a guarantor you can opt for external insurance, such as Visale (in France) or equivalent in other countries. </li></ul></li>
        <li><strong>For Professionals</strong>:<ul class='second-level'><li><strong>You</strong>: copy of ID or passport phone number, email address, and either your last pay slip or your last tax filing.</li></ul></li></ul>
        <p>Upon receiving these documents, our team will promptly review them and get back to you.</p>
        <p>Once your application has been reviewed, we will contact you to discuss next steps. You will then receive a link to view and electronically sign your tenancy agreement online. </p>`,  
        src:""
    },
    {
        id:2,
        title:"Can I cancel a booking?",
        answer:`<p>You have the option to cancel your booking free of charge up to one month before your scheduled move-in date. However, if you decide to cancel with less than one month's notice, you will still be responsible for covering the cost of the first month.</p>
        <p>Please note that, in case of cancellation, you will still be liable for 50% of the administration fee.</p>
        <p>If you made your booking through an external website such as Studapart or Housinganywhere, it's advisable to inquire with them about the possibility of receiving a refund for any fees you may have already paid. They can provide specific information regarding their refund policies.</p>`,  
        src:"" 
    },
    {
        id:3,
        title:"What type of furniture and equipment will I find in the apartment?",
        answer:"<p>All our apartments are fully furnished and decorated. The kitchen is fully equipped, inclusive of kitchenware and equipment such as oven, microwave, fridge, freezer, kettle, and toaster. The living areas are designed to make you feel at home, and they typically feature a big flatscreen TV, one or more sofas, and decoration. All our rooms feature a double bed (most of the time 140x200cm, sometimes 120x200cm), a night table, shelves, storage, a desk with chair, lamps and decoration such as paintings, photos etc. Sometimes, bigger rooms will also have their own couch or armchair and additional furniture.</p>",  
        src:""
    },
    {
        id:4,
        title:"Are there any costs related to my booking?",
        answer:`<p>All the rooms listed on Fine Cribs are managed directly by us, which means that Fine Cribs will be your primary point of contact. When you book directly on <a href='https://finecribs.com/' target='_blank'>finecribs.com</a> there are no additional agents involved. However, please note that partner websites like Studapart and Housinganywhere may apply their own fees if you choose to book through them.</p>
        <p>Our only fee is an administration fee, which is intended to cover the costs associated with processing your application, preparing the tenancy agreement, facilitating your check-in, check-out, and inventory procedures, and providing administrative assistance throughout your stay. We aim to ensure a seamless and hassle-free experience for our tenants.</p>`,  
        src:""
    },
    {
        id:5,
        title:"How to sign the tenancy agreement?",
        answer:`<p>After your booking is confirmed, you will be required to sign the tenancy agreement on our partner platform, "Rentila." For detailed information on this process, please follow the instructions in the video below. It will guide you through viewing and signing your tenancy agreement and preparing for your check-in.</p>
        <p>To access the instructions, please click on the link below, and you can choose your preferred language from English, French, or Italian:</p>
        <p class='p-video'>Click here to view the instructions in </p> `,  
        src:""
    },
    {
        id:6,
        title:"What does the administraiton fee cover?",
        answer:`<p>The administration fee is intended to cover a variety of costs associated with the onboarding of prospective tenants and ensuring the efficient operation of our services. It encompasses:</p>
        <ol><li><strong>Tenants Onboarding:</strong> This includes processing applications, drafting the tenancy agreement, and covering third-party costs related to the digital signature of both the tenancy agreement and the inventory.</li>
        <li><strong>Check-in and Check-out:</strong> Our staff will contact you to organize both check-in and check-out. At check-in, you will be personally welcomed at the apartment by our staff.</li>
        <li><strong>Entry and Exit Inventory:</strong> You will conduct a detailed inventory of the apartment with a member of our staff both at check-in and check-out.</li>
        <li><strong>Client Servicing:</strong> This component addresses client support and assistance throughout your tenancy. It involves handling inquiries or concerns that may arise and providing administrative support for tasks like drafting receipts and certificates.</li>
        <li><strong>Website Maintenance:</strong> It covers the maintenance of our website, ensuring a seamless and user-friendly digital experience for our tenants.</li>
        <li><strong>Ongoing Maintenance:</strong> This part of the fee supports the coordination of ongoing maintenance and upkeep of the property during your stay, ensuring a comfortable and safe living environment.</li>
        </ol>`,  
        src:""
    }
   ]   
},
{
    id:1,
    title:"Prepare your arrival",
    subTitles:[
        {
        id:0,
        title:"I have sent a booking request, what should I do know?",
        answer:`<p>After receiving confirmation that your booking request, submitted on finecribs.com or a partner website, has been accepted, you'll need to sign the tenancy agreement and prepare for check-in. Here are the next steps:</p>
        <ol><li> Log into your Rentila space by following the link received in your inbox.</li>
        <li>Review and sign the tenancy agreement on Rentila.</li>
        <li>Upload your insurance certificate and provide your IBAN (which will be used for refunding your deposit).</li>
        <li>Make payments for the 1st-month rent, the deposit, and the administration fee. If you've booked through a partner website, the 1st-month rent may have already been paid.</li>
        <li>Our staff will contact you to coordinate the check-in, which is possible from Monday to Friday between 9 a.m. and 6 p.m.</li>
        </ol><p class='p-video'>For more detailed instructions on how to view and sign the tenancy agreement, please refer to the video instructions in</p>`,  
        src:"" 
    },
    {
        id:1,
        title:"I have booked through an external website (e.g. Studapart, Housinganywhere. Do I still have to pay the first month at check-in?", 
        answer:`<p>If you've booked through an external website, it's likely that you've already paid the first month's rent and, sometimes, also out administration fee. In this scenario, your responsibility before moving in is limited to paying the deposit and the administration fee. Please be aware that the external website will usually retain the first month's rent until your check-in. They will then transfer it to us, typically within 1-2 days after your check-in.</p>`,  
        src:""
    },
    {
        id:2,
        title:"What should I bring?",
        answer:`<p>In our fully furnished apartments, the only items you need to bring are your personal belongings, specifically towels and bedding. Everything else you might need, including blankets, pillows, and various equipment like a hairdryer or iron, is provided within the apartment for your convenience.</p>`,  
        src:"" 
    },
    {
        id:3,
        title:"When can I checkin or check-out)",
        answer:`<p>Check-ins and check-outs are scheduled from Monday to Friday, between 9 a.m. and 6 p.m., except for holiday days. We kindly request that you coordinate your travel plans to align with these hours for a smooth and convenient check-in or check-out process.</p>
        <p>In exceptional circumstances, we may be able to accommodate check-ins and check-outs beyond the standard hours for an additional cost of 50€. Please note that this service is subject to availability and should be arranged in advance to ensure a smooth and convenient experience for you.</p>`,  
        src:""
    },
    {
        id:4,
        title:"How shall I pay rent?",
        answer:`<p>Our preferred method of payment is by bank transfer. The tenancy agreement will specify the account details to use for this purpose. Whenever possible, we encourage our tenants to set up an automatic transfer every 1<sup>st</sup> day of the rental month to ensure timely rent payments without any delays.</p> 
        <p>Alternatively, you have the option to pay by debit/credit card. In this case, we will establish a payment plan, and you will need to make monthly payments by following the provided link. This flexibility allows you to choose the payment method that best suits your preferences and needs.</p>`,  
        src:""
    }
   ]   
},
{
    id:2,
    title:"During your stay", 
    subTitles:[
        {
        id:0,
        title:"Can I make changes to my bedroom?",
        answer:`<p>You have a fair amount of freedom to personalize your room, with the key condition being that you avoid causing damage to the walls, floor, and furniture. It's important to ensure that you return your bedroom in the same condition as when you initially occupied it. While you're free to adjust your space, we advise against drilling holes in the walls, as this usually necessitates wall repair and repainting at the conclusion of your stay, which may result in charges to you.</p>`,  
        src:"" 
    },
    {
        id:1,
        title:"Can I terminate my lease before the end of the contract?", 
        answer:`<p>You can send us an email to request to terminate your lease before the end of the contract. For exemple in France, you can terminate your lease by handing a 1-month notice. In Italy, the “Contratto Transitorio” can only be terminated under specific circumstances.</p>`,  
        src:""
    },
    {
        id:2,
        title:"Can I extend my stay?",
        answer:"<p>Yes, you can request to extend your stay. We will be happy to do so if your room has not been booked in the meantime. Should we not be able to confirm the extension, we will propose alternative solutions to extend your stay in any other of our apartments.</p>",  
        src:"" 
    },
    {
        id:3,
        title:"Can I move across different Finecribs apartments?",
        answer:`<p>Certainly, if there is an available room and you wish to relocate, you can apply for a new room directly through the website. When requesting a room change, please provide the same notice period as you would when terminating your current contract. If you decide to move to a different room, you will need to sign a new lease for that room and update your home insurance accordingly. In many cases, your deposit can be transferred to the new tenancy, simplifying the transition process.</p>`,  
        src:""
    },
    {
        id:4,
        title:"May I smoke?",
        answer:"<p>No, our apartments are strictly smoke free areas.</p>",  
        src:""
    },
    {
        id:5,
        title:"May I bring a pet?",
        answer:"<p>As much as we love pets, we don't allow pets in the apartments for the simple fact that your current (or future) housemates might not be cool with it.</p>",  
        src:""
    },
    {
        id:6,
        title:"Are couples allowed?",
        answer:`<p>All our rooms are for single occupancy only. However, if you have a partner or significant other who would like to visit and stay for a few days, we are generally open to this. We kindly request that you inform all other housemates in advance and ensure their consent before hosting guests to maintain a harmonious living environment.</p>`,  
        src:""
    },
    {
        id:7,
        title:"Am I liable if a housemate doesn’t pay rent?",
        answer:"<p>No, each housemate is liable for his/her rent and there is no joint liability between tenants.</p>",  
        src:""
    },
    {
        id:8,
        title:"Am I liable if a housemate damages his room?",
        answer:"<p>No, each housemate is liable for damages caused to the areas his/ her has an exclusive right to occupy like the room.</p>",  
        src:""
    },
    {
        id:9,
        title:"Am I liable if a housemate damages the commumal areas?",
        answer:`<p>Housemates share a joint liability towards the landlord for any damages caused to the communal areas. You and your housemates can mutually decide how to distribute the costs associated with these repairs. However, if no such agreement is in place, any damage to the communal areas, including equipment, will be divided equally among all occupants. It's important to ensure that communal spaces are well-maintained and that any damages are addressed responsibly by the group.</p>`,  
        src:""
    },
    {
        id:10,
        title:"Can I invite friends to stay over?",
        answer:`<p>Yes, you can have external guests over for limited periods, such as a couple of days, if your housemates are informed and in agreement. However, please be considerate of the fact that external guests may cause disturbances to your housemates. Open communication and mutual consent among housemates are essential to maintain a harmonious living environment.</p>`,  
        src:""
    },
    {
        id:11,
        title:"My apartment needs maintenance, what should I do?",
        answer:`<p>Please note that everyday maintenance (e.g. replacing bulbs) is your responsibility. In case the apartment needs more serious maintenance, we kindly ask you to email <a href='mailto:contact@finecribs.com'>contact@finecribs.com</a></p>`,  
        src:""
    },
    {
        id:12,
        title:"I have discovered cockroaches, bed bugs, or ants in the apartment. Who bears the responsibility for covering the cost of their eradication?",
        answer:`<p>Costs associated with pest control and the extermination of various types of pests, such as bed bugs, cockroaches, and clothes moths, will be allocated based on the '3-month principle,' as follows:</p>
        <p>If a tenant reports the presence of pests within 3 months of the entry inventory, the landlord will cover 100% of the extermination costs. This implies that the issue existed before the tenant moved in.</p>
        <p>If a tenant reports the presence of pests after 3 months from the entry inventory, all tenants will collectively bear 100% of the cost. This suggests that the problem was caused, either knowingly or unknowingly, by the tenants.</p>
        <p>In all cases, a qualified professional will handle the pest control and extermination process.</p>
        `,  
        src:""
    },
    {
        id:13,
        title:"The shower or sink is clogged. Who bears the responsibility for covering the cost of unclogging it?",
        answer:`<p>During the initial inventory, a thorough inspection of all sinks and toilets' drainage systems will be conducted. If any issues, such as clogged drainage, are reported after the inventory or identified during the exit inventory, the cost of addressing these issues will be shared collectively among the tenants.</p>`,  
        src:""
    }
   ] 
},
{
    id:3,
    title:"Prepare your departure", 
    subTitles:[
        {
        id:0,
        title:"We have damaged an appliance, and we would like to get it replaced. How should we proceed?",
        answer:`<p>If you have damaged an appliance, we appreciate it if you inform us, even if you intend to replace it at your own expense. Please keep in mind that any replacement should be made with an identical item if it's commercially available. We can likely provide you with the exact reference of the appliance that needs to be replaced. If the exact match isn't available, we should have a discussion to determine the best replacement.</p>
        <p>It's important to note that any replacement should also include the costs associated with hiring qualified professionals to remove the damaged appliance and install the new one. This ensures a proper and safe replacement process.</p>`,  
        src:"" 
    },
    {
        id:1,
        title:"My check-out date is approaching, what should I do?", 
        answer:`<p>To check out, you should coordinate with our staff to schedule a time slot. Check-outs are typically available from Monday to Friday between 9 a.m. and 6 p.m. During the check-out process, you will conduct a final inventory together with the property manager to assess the condition of your room and the communal areas. This ensures that both parties agree on the condition of the property at the end of your stay.</p>`,  
        src:""
    },
    {
        id:2,
        title:"Shall I clean my room before I check-out? ",
        answer:"<p>You can expect a clean room when you check-in, and we kindly request that you leave it in the same clean condition when you check out. If you are unable to do so, our staff can provide cleaning services, and there will be a 50€ fee associated with this service. Maintaining cleanliness ensures a pleasant living environment for all residents.</p>",  
        src:"" 
    },
    {
        id:3,
        title:"The apartment was not clean when I moved in. What should I do?", 
        answer:`<p>In some of our apartments, our staff provides periodic cleaning of the communal areas. However, the primary responsibility for maintaining a clean environment in these areas lies with the housemates, who should coordinate among themselves to ensure proper cleaning.</p>
        <p>While we guarantee a clean bedroom at check-in, the condition of the communal areas will largely depend on the collective efforts of your housemates.</p>
        <p>If you wish to schedule additional cleaning, our staff can arrange it at a cost of €99 for a 3-hour cleaning session. This can be a helpful option if you and your housemates want to maintain a higher level of cleanliness in the shared spaces.</p>
        `,  
        src:""
    },
    {
        id:4,
        title:"When will I receive my deposit?", 
        answer:`<p>Before initiating the refund process, please ensure that your bank account details are correctly filled out on your Rentila account. Refunds for your deposit will generally be processed within 1 month, unless:</p>
        <ul><li><strong>Potential damages:</strong> If there are potential damages identified during the exit inventory that require obtaining quotes from qualified professionals, the refund may take up to 2 months.</li>
        <li><strong>Excess electricity consumption:</strong> If the estimated residual balance related to electricity consumption exceeds 20% of the deposit, we will notify you within a month after check-out. In this case, the refund will be issued within 2 months from checkout.</li></ul>
        `,  
        src:""
    }
   ]  
  
},
{
    id:4,
    title:"Maintenance", 
    subTitles:[
        {
        id:0,
        title:"Plumbing",
        answer:`
        <h4>The bathroom or kitchen sinks are clogged<h4>
        <p>If your sink is draining slowly or not at all, it's likely due to a clogged drain, often caused by hair or food particles. It's crucial to clear anything that could obstruct the drain, and you can do this by using a plunger. Here are the steps to unclog your sink:</p>
        <p><strong>Free the space under the siphon:</strong> Ensure there is enough space under the siphon before you continue.</p>
        <p><strong>Place a basin under the siphon:</strong> Position a basin underneath the siphon to catch any water or debris.</p>
        <p><strong>Unscrew the lower part of the siphon:</strong> You can unscrew the plastic siphon using your hands without the need for special tools. Hold the upper part firmly with your other hand to prevent damage to the piping during the unscrewing process.</p>
        <p><strong>Check for remaining debris: </strong> Inspect the siphon for any debris that might still be stuck. If any is found, use a small wire hook or an old toothbrush to clear the drain.</p>
        <p><strong>Screw it back:</strong>Screw the components of the siphon back together, ensuring you put the seals back inside the siphon. It's crucial to retain this seal; if it's lost, the entire siphon will need replacement.</p>
        <p><strong>Check for leaks and tighten:</strong> Run water to check for any leaks. If you spot leaks, slightly tighten the pipes and the siphon.</p>
        <p>If the problem persists despite these efforts, please contact our technical department at <a href='mailto:contact@finecribs.com'>contact@finecribs.com</a> for further assistance.</p>
        <h4>The shower is clogged</h4>
        <p>Shower traps (system in the shower where water drains) can become clogged mostly due to hair, obstructing objects, and soap. It is imperative that you systematically use a shower drain cover (grid that prevents hair obstructing objects from falling into the drain) and that you clean systematically after your shower. The methods below are intended to help you unclog your shower drain.</p>
        <ul><li><strong>Method 1</strong><br/> Check that nothing is blocking the water outlet. Otherwise, remove what is clogging the siphon with your fingers or with an iron rod if the clog is deeper.</li>
        <li><strong>Method 2</strong><br/> Pour boiling water down the drain. Very hot water can help dissolve the clog.</li>
        <li><strong>Method 3</strong><br/> Pour baking soda mixed with white vinegar down the drain. Wait 30 minutes then pour boiling water which should remove the clog (there is a foam reaction which is normal).</li></ul>
        <p>If the problem persists, contact our technical team at <a href='mailto:contact@finecribs.com'>contact@finecribs.com</a></p>
        <h4>The toilet is clogged</h4>
        <p>Toilet clogs often occur due to the flushing of items like excessive toilet paper, sanitary tampons, cotton swabs, baby wipes, etc. Therefore, we kindly request that you refrain from disposing of anything down the toilet except toilet paper. Here are several methods to resolve a toilet clog:</p>
        <p><strong>Method 1: Baking Soda and Vinegar</strong><br/>Pour baking soda into the bowl.<br/>
        Slowly add the contents of a medium-sized bottle of vinegar (any type). A chemical reaction will occur, causing foaming.<br/>
        Let the mixture sit for a few minutes.<br/>
        Add 3 or 4 liters of hot tap water to the toilet bowl to enhance the effectiveness of the baking soda and vinegar mixture. Note: This mixture produces foam, so wearing a mask during the operation is advisable.
        </p>
        <p><strong>Method 2: Hanger</strong><br/>This method is effective when the clog is a few inches down the drain. Straighten out a coat hanger, unrolling both ends until they are no longer connected.<br/>
        Insert one end of the hanger into the pipe.<br/>Once the hanger is in the pipe, twist, push, and wiggle it in circular motions to clear the pipe.</p>
        <p><strong>Method 3: Plunger</strong><br/>Ensure the plunger fully covers the hole and is submerged entirely in the
        water, allowing you to push and pull water, not air, through the opening.<br/>Add water from the bathroom sink to the bowl if there isn't enough
        water to cover the plunger.<br/>Running the plunger under hot water can soften it, helping it create a better seal.<br/>
        Start with gentle pressure to avoid splashing, then push down sharply to dislodge and loosen the clog.<br/>
        Continue vigorously pushing and pulling until the water begins to drain. It may take 15 to 20 cycles before the toilet unclogs.<br/>
        If the problem persists despite these efforts, please contact our technical team at <a href='mailto:contact@finecribs.com'>contact@finecribs.com</a> for further assistance.
        </p>
        `,  
        src:"" 
    },
    {
        id:1,
        title:"Water",
        answer:`
        <h4>I don’t have hot water</h4>
        <p>In order to solve a hot water problem, you must determine how your apartment is supplied with hot water.<br/> There are 2 possibilities:</p>
        <ol><li><strong>Communal hot water</strong><br>If your hot water is common to the whole building, you can't do anything but wait. This may be due to external works or to an intervention in progress (a word may be displayed in the commons of the building).</li>
        <li><strong>Electric water heater</strong><br>It is possible that the electricity is cut off and no longer supplies the electric water heater. It may also be due to the capacity of the water heater, for example if many showers have been taken one after the other. Last, it might be due to limescale having damaged the internal resistance of the electric water heater</li></ol>
        <p>If the problem persists, please inform our technical team at <a href="mailto:contact@finecribs.com">contact@finecribs.com</a></p>
        `,  
        src:"" 
    },
    {
        id:2,
        title:"Internet",
        answer:`
        <h4>I have a problem with internet</h4>
        <p>It's important to ensure that your internet connection is properly set up, and you should verify that the lights on your box are functioning as they should. Here are some checks you can perform:</p>
        <p><strong>Slow or Non-Working Internet:</strong> If your internet is slow or not working, try unplugging your internet box and then plugging it back in to reset it.</p>
        <p><strong>Red Lights on the Box:</strong> If the lights on your internet box are red, unplug it (wait for a few seconds) and then reconnect it. This often resolves connectivity issues.</p>
        <p><strong>Connection to a Wi-Fi Repeater:</strong> If you are connected to a Wi-Fi repeater, try connecting to the main box instead and check if it's working. Sometimes, repeaters can cause connection problems.</p>
        <p><strong>Speed Test:</strong> If you can access the network but the connection is slow or unreliable, you can conduct a speed test. You can use a speed test tool (like this link: <a href="https://www.speedtest.net/fr" target="_blank">https://www.speedtest.net/fr</a>) and send us a screenshot of the results.</p>
        <p>If the problem continues even after these checks, please send an email to <a href="mailto:contact@finecribs.com">contact@finecribs.com</a>. We may need to collaborate with the internet service provider to resolve the issue.</p>
        `,  
        src:"" 
    },
    {
        id:3,
        title:"Bugs",
        answer:`
        <h4>I have cockroaches in the apartment</h4>
        <p>The best way to eliminate cockroaches is by applying a gel like Magnum Gel specifically for cockroaches (which you can find on Amazon) to the areas that need treatment.<br>If the problem persists, please send an email to <a href="mailto:contact@finecribs.com">contact@finecribs.com</a></p>
        <h4>I have ants in the apartment</h4>
        <p>The best way to eliminate ants is by applying a gel like Magnum Gel specifically for ants (which you can find on Amazon) to the areas that need treatment. If the problem persists, please send an email to <a href="mailto:contact@finecribs.com">contact@finecribs.com</a></p>
        <h4>I have bed bugs in the apartment</h4>
        <p>In case you spot bed bugs, please send an email to <a href='mailto:contact@finecribs.com'>contact@finecribs.com</a> as we will need to coordinate a prompt intervention realized by a qualified professional</p>
        `,  
        src:"" 
    }
   ]   
}
]
// FaqspageTablePartnering
export const FaqspageTablePartnering = [
    {
        id:0,
        title:"Help you decide",
        subTitles:[
            {
            id:0,
            title:"Why should I trust Finecribs?",
            answer:`<p>There are several reasons why you should choose to partner with us: </p>
            <ul style="list-style:none;margin:0;padding:0;"><li><strong>Our interests are aligned:</strong> We understand your perspective as a landlord because we are landlords ourselves. We manage your property with the same care and attention we give to our own investments.</li>
            <li><strong>Steady Rental Payments:</strong> You rent your property to Fine Cribs. In exchange, we provide you with a steady rental payment, even if your apartment is temporarily unoccupied, offering you peace of mind and financial stability.<br/>
            Our comprehensive approach aims to make property management hassle-free, profitable, and secure for you as a landlord. </li>
            <li><strong>Tenant Selection:</strong> We have a rigorous tenant selection process, ensuring that only qualified and reliable tenants are chosen for your property.</li>
            <li><strong>Professional Maintenance:</strong> Our teams of qualified professionals oversee ongoing maintenance for your apartment, ensuring it remains in top condition.</li>
            </ul>`,  
            src:""
        },
        {
            id:1,
            title:"How long will Finecribs rent my property?", 
            answer:`<p>In general, Fine Cribs seeks to establish long-term lease agreements with individual property owners. We typically prefer to secure properties for a minimum of 7 years, and we ideally favor even longer lease periods. This long-term commitment allows for stability and mutually beneficial arrangements for both Fine Cribs and property owners.</p>`,  
            src:""
        },
        {
            id:2,
            title:"Who will stay in my apartment?",
            answer:`<p>We take pride in offering high-quality accommodation to a discerning audience of carefully selected international tenants, primarily consisting of young professionals. Our thorough application review process ensures that only the most suitable profiles are accepted, maintaining the standards of our properties.</p>
            <p>Our commitment to excellence means that your interests as a property owner are consistently aligned with our mission to provide exceptional housing options. This alignment results in a win-win scenario for both property owners and Fine Cribs.</p>`,  
            src:"" 
        },
        {
            id:3,
            title:"Should my apartment be furnished or unfurnished?",
            answer:`<p>Typically, we aim to install at least a kitchen in our properties. We generally prefer unfurnished lettings because they provide our interior designers with the flexibility to design the space according to our standards. However, we also accept properties with a minimum level of furnishing, ensuring that the space meets our requirements and quality standards.</p>`,  
            src:""
        },
        {
            id:4,
            title:"What happens if Finecribs finds no tenants?",
            answer:`<p>You will continue to receive a monthly rent from Fine Cribs, which means that there will be no significant change in your rental income. This consistency in rental payments provides you with financial stability and peace of mind as a property owner.</p>`,  
            src:""
        },
        {
            id:5,
            title:"What happens if a tenant damages the property?",
            answer:`<p>Fine Cribs, as tenant, is liable to the property owner for any damage caused by a tenant. Of course, we also get insurance, and we request all our tenants to do the same.</p>`,  
            src:""
        },
        {
            id:6,
            title:"What do you mean by «smart refurbishment»?",
            answer:`<p>If your property requires minor refurbishments such as repainting, bathroom renovations, or the construction of a plastered wall, our teams can handle these tasks at no additional cost to you. Any necessary initiatives of this nature will be considered in the offer we provide to you, ensuring that your property is maintained and improved as needed without incurring extra expenses on your part.</p>`,  
            src:""
        },
        {
            id:7,
            title:"How do I know if my proerty qualifies?",
            answer:"<p>You should submit a request through the form and our team will contact you to assess together whether your property qualifies. Typically, we look for properties in central locations, with at least three bedrooms and in overall good conditions.</p>",  
            src:""
        },
        {
            id:8,
            title:"Do you rent of also buy properties?",
            answer:"<p>Our core expertise lies in acquiring, designing and managing beautiful spaces. In case you are uncertain whether to rent or sell your property we would be happy to discuss and possibly make an offer for acquiring the property instead of renting it.</p>",  
            src:""
        }
       ]   
    }
]
