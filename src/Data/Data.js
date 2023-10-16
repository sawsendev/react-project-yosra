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
        id: 0,
        href: "",
        name: "HOME"
    },
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
        answer:"<p>You can  <a class='link' href='#'>create an alert</a> specifying your ideal move-in date and we will keep you informed as soon as we will have availabilities. Please consider that we typically get a good visibility on availabilities 2-3 months in advance, which means that if you are looking to move in in let’s say 6 months and that there are no availabilities listed on the website, chances are that we will be able to confirm you new availabilities as they arise 2-3 months before your move-in date.</p>",  
        src:""
    },
    {
        id:1,
        title:"What types of documents do you require to book a room?", 
        answer:"<p>When you submit your application, we will ask you to attach certain documents.</p><ul class='first-level'><li>If you are a student<ul class='second-level'><li>For you: ID, phone number, email address, certificate of enrolment</li><li>For your guarantor: ID, last payslip or last tax filing. Alternatively, you can subscribe to an external insurance such as Visale (in France)</li></ul></li><li>If you are a professional, ID, phone number, email address, last payslip or last tax filing</li></ul> <p>After the reception of these documents, we will review them and respond asap.</p> <p>Once approved, you will receive a link to view and sign your tenancy agreement which you can do online.</p>",  
        src:""
    },
    {
        id:2,
        title:"Can I cancel a booking?",
        answer:"<p>You can cancel a booking until 1 month before your move in date. If you would like to cancel with less than one month notice you will still be liable for paying the 1st month. If you have booked through an external website like Studapart or Housinganywhere, you should check with them if you are eligible to a refund of any fee potentially paid.</p>",  
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
        answer:"<p>All the rooms posted on Finecribs are managed directly by us, meaning that Finecribs will be your landlord. This means that there are no intermediary fees when you book directly on Finecribs.com. However, partner website might apply their own commission if you decide to book through them.<br/> The only fee charged by Finecribs is a flat €[399] admin fee to cover the costs related to process the application, check-in, checkout and inventory.</p>",  
        src:""
    },
    {
        id:5,
        title:"How to sign the tenancy agreement?",
        answer:"<p>Once your booking is confirmed, you will need to sign the tenancy agreement on “Rentila”, which is the external provider that we use. For more information, please follow the instructions in the video below to view and sign your tenancy agreement, and to prepare your check-in</p> <ul class='arrow-list'><li>Insert video with (English version)</li><li>Insert video with (French version)</li><li>Insert video with (Italian version)</li></ul>",  
        src:""
    },
    {
        id:6,
        title:"What does the administraiton fee cover?",
        answer:"<p>The administration fee covers a series of costs covering, among other things, tenants onboarding (e.g. drafting of the tenancy agreement and electronic signature), check-in, check-out and inventory fee, ongoing maintenance and client servicing during your stay, and the maintenance of the website to offer you a digital experience.</p>",  
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
        answer:"<p>After receiving confirmation that your booking request submitted on Finecribs.com or on a partner website has been accepted, you will need to sign the tenancy agreement and prepare for check-in. You will receive a link from “Rentila” which is the external provider we use for electronic signing. Please see below the next steps:</p><ol><li>Log into your Rentila space by following the link received in your inbox</li><li>Review and sign the tenancy agreement on Rentila</li><li>Upload your insurance certificate and enter you IBAN (which will be used for refunding your deposit)</li><li>Pay the 1st-month rent, the deposit, the check-in and inventory fee (3 separate wire transfers). If you have booked through a partner website, the 1st-month rent has normally already been paid</li><li>Our staff will contact you to organise the check-in, which is possible from Monday to Friday between 9 a.m. and 6 p.m.</li></ol><p>For more information, please follow the instructions in the video below to view and sign your tenancy agreement, and to prepare your check-in</p><ul class='arrow-list'><li>Insert video with (English version)</li><li>Insert video with (French version)</li><li>Insert video with (Italian version)</li></ul>",  
        src:"" 
    },
    {
        id:1,
        title:"I have booked through an external website (e.g. Studapart, Housinganywhere. Do I still have to pay the first month at check-in?", 
        answer:"<p>If you have booked through an external website, you have normally already paid the first month. In that case, you will only have to pay the deposit and the admin fee before you move in. Please note that the external website will normally hold the 1st month rent until you move in, and they will transfer it to us typically 1-2 days after you check-in</p>",  
        src:""
    },
    {
        id:2,
        title:"What should I bring?",
        answer:"<p>The short answer is that the only things you need to bring are towels and bedding, which are personal belongings. You will find everything else in the apartment, e.g. blankets, pillows and any other type of equipment such as hairdryer, iron etc.</p>",  
        src:"" 
    },
    {
        id:3,
        title:"When can I checkin or check-out)",
        answer:"<p>Check-ins and check-outs are possible from Monday to Friday from 9am to 6pm (except for holiday days). We kindly ask you to plan your travel arrangements accordingly.</p>",  
        src:""
    },
    {
        id:4,
        title:"How shall I pay rent?",
        answer:"<p>The preferred method is by bank transfer. The tenancy agreement will indicate which account to use. Whenever possible, we request our tenants to set-up a direct debit on a given date of the month to be certain no to skip rent payments.</p> <p>Alternatively, you can opt for paying by debit/credit card, in which case we will set up a payment plan and you will need to pay each month by following the relevant link.</p>",  
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
        answer:"<p>You can do pretty much what you want in your room as long as you do not damage the walls, the floor, and the furniture, and you return your bedroom in the same condition as you found it. However, we suggest you don’t drill holes in the walls as this will often entail fixing and repainting the wall at the end of your stay which is going to be charged to you.</p>",  
        src:"" 
    },
    {
        id:1,
        title:"Can I terminate my lease before the end of the contract?", 
        answer:"<p>You can send us an email to request to terminate your lease before the end of the contract. In France, you can terminate your lease by handing a 1-month notice. In Italy, you can terminate your lease by handing a 2-month notice.</p>",  
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
        answer:"<p>Yes, if there is a room available and by providing the same notice as if you were to terminate your contract. You can apply for a new room directly through the website. In case you decide to move, you will need to sign a new lease for the new room and have your home insurance duly updated. Your deposit can be in most cases rolled over to the new tenancy.</p>",  
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
        answer:"<p>No, we unfortunately all our rooms are for single occupancy only. In case your girlfriend or boyfriend would like to come over and spend a few days we are cool with it as long as all other housemates have been informed and they are also ok.</p>",  
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
        answer:"<p>No, each housemate is liable for damages caused to the areas he/she has an exclusive right to occupy like the room.</p>",  
        src:""
    },
    {
        id:9,
        title:"Am I liable if a housemate damages the commumal areas?",
        answer:"<p>Yes, there is a joint liability vis-à-vis the landlord for all the damages caused to the communal areas. Of course, you can decide between housemates to share the costs associated with repairing differently. However, if this not the case any damage to the communal areas (incl. equipment) will be shared in equal parts between the occupants.</p>",  
        src:""
    },
    {
        id:10,
        title:"Can I invite friends to stay over?",
        answer:"<p>Yes, for limited periods only (e.g. a couple of days) if your housemates are informed and agree. Please consider that external guests could create disturbance to your housemates.</p>",  
        src:""
    },
    {
        id:11,
        title:"My apartment needs maintenance, what should I do?",
        answer:"<p>Please note that everyday maintenance (e.g. replacing a bulb) is your responsibility. In case any breaks in the apartment, you should send us an email to <a href='mailto:contact@finecribs.com'>contact@finecribs.com</a></p>",  
        src:""
    }
   ] 
},
{
    id:3,
    title:"Maintenance", 
    subTitles:[
        {
        id:0,
        title:"Plumbing",
        answer:`
        <h5>The bathroom or kitchen sinks are clogged<h5>
        <p>If the water in your sink drains slowly or can't drain at all, your sink drain is probably clogged. This is most certainly due to hair or food, It is imperative that you remove anything that can clog your drain, for example by using a plunger.<br/> To unclog your sink:</p><ul> <li>Free the space under the siphon</li><li>Place a basin under the siphon</li><li>Unscrew the lower part of the siphon: to unscrew the plastic siphon, there is no need to use specific tools: your hands are enough. Hold the upper part firmly with your second hand so as not to disturb the piping when unscrewing</li><li>Check to see if any debris is still stuck: If there is still debris clogging your drain, use a small wire hook or an old toothbrush to free the drain</li><li>Screw it back on by replacing the seal: screw the elements of your siphon back on and don't forget to put the seals back inside your siphon! Attention, it is very important to keep this seal. If it is lost or thrown away, the siphon will have to be completely replaced.</li> <li>Check for leaks , tighten if necessary. Perform a short test: run the water to inspect for leaks. If so, tighten the pipes and the siphon a little more.</li></ul> <p>If the problem persists, contact our technical department at <a href='mailto:contact@finecribs.com'>contact@finecribs.com</a></p>
        <h5>The shower is clogged</h5>
        <p>Shower traps (system in the shower where water drains) can become clogged mostly due to hair, obstructing objects, and soap. It is imperative that you systematically use a shower drain cover (grid that prevents hair obstructing objects from falling into the drain) and that you clean systematically after your shower. The methods below are intended to help you unclog your shower drain.</p> <ul><li><strong>Method 1</strong><br/> Check that nothing is blocking the water outlet. Otherwise, remove what is clogging the siphon with your fingers or with an iron rod if the clog is deeper.</li> <li><strong>Method 2</strong><br/> Pour boiling water down the drain. Very hot water can help dissolve the clog.</li> <li><strong>Method 3</strong><br/> Pour baking soda mixed with white vinegar down the drain. Wait 30 minutes then pour boiling water which should remove the clog (there is a foam reaction which is normal).</li></ul> <p>If the problem persists, contact our technical team at <a href='mailto:contact@finecribs.com'>contact@finecribs.com</a></p>
        <h5>The toilet is clogged</h5>
        <p>The toilets usually get clogged because of too much toilet paper, sanitary tampons, cotton swabs, baby wipes... We therefore ask you not to throw anything down the toilet except paper. Several methods can solve your problem:</p><ul><li><strong>Method 1: Baking Soda and Vinegar</strong><br>Pour baking soda into the bowl. Then slowly pour in the contents of one medium-sized bottle of vinegar (any type). A chemical reaction takes place and the mixture foams. Let stand for a few minutes Add 3 or 4 liters of hot tap water to the toilet bowl. This makes the baking soda and vinegar mixture work better. Warning: this mixture causes foam so we advise you to wear a mask during the operation.</li><li><strong>Method 2: Hanger</strong><br>This method usually works when the clog is a few inches down the drain. Undo the hanger. Unroll both ends of the hanger until they are no longer connected. Push the end into the pipe. Once the coat hanger is in the pipe, twist it, push it down, and wiggle it in circles to clear the pipe.</li><li><strong>Method 3: Plunger</strong><br>Make sure the plunger completely covers the hole. Submerge the plunger fully in the water so that you can push and pull water through the opening, not air. Add water from the bathroom sink to the bowl if there isn’t enough water to cover the plunger. Running the plunger under hot water can soften it, which can help it create a better seal.<br>Push down gently at first, since the first plunge will push air into the bowl and could splash back. Then pull up sharply to disturb the clog and loosen it. Continue vigorously pushing and pulling until the water begins to drain. It may take 15 to 20 cycles before the toilet unclogs.</li></ul><p>If the problem persists, contact our technical team at<a href='mailto:contact@finecribs.com'>contact@finecribs.com</a></p>
        `,  
        src:"" 
    },
    {
        id:1,
        title:"Water",
        answer:`
        <h5>I don’t have hot water</h5>
        <p>In order to solve a hot water problem, you must determine how your apartment is supplied with hot water. There are 2 possibilities:</p><ol><li><strong>Communal hot water</strong><br>If your hot water is common to the whole building, you can't do anything but wait. This may be due to external works or to an intervention in progress (a word may be displayed in the commons of the building).</li><ol><li><strong>Electric water heater</strong><br>It is possible that the electricity is cut off and no longer supplies the electric water heater. It may also be due to the capacity of the water heater, for example if many showers have been taken one after the other. Last, it might be due to limescale having damaged the internal resistance of the electric water heater</li></ol><p>If the problem persists, please inform our technical team at<a href="mailto:contact@finecribs.com">contact@finecribs.com</a></p>
        `,  
        src:"" 
    },
    {
        id:2,
        title:"Internet",
        answer:`
        <h5>I have a problem with internet</h5>
        <p>It is important to check that the box is correctly connected and that the lights are on. Make sure you do the following checks:</p><ul><li>Internet is slow or not working at all? If it is slow, you can try unplugging and then plugging your box back</li><li>If the lights on your box are red, you should first unplug (wait a few seconds) then reconnect your box.</li><li>Are you connected to a wifi repeater? If that’s the case, try to connect to the main box instead, and check if it is working</li><li>If you can access the network, but the connection is slow or non-existent, you can do a speed test (follow this link<a href="https://www.speedtest.net/fr" target="_blank">https://www.speedtest.net/fr</a>) and send us a screenshot.</li><p>If the problem persists, please send an email to<a href="mailto:contact@finecribs.com">contact@finecribs.com</a>as we might need to check with the internet provider</p>
        `,  
        src:"" 
    },
    {
        id:3,
        title:"Bugs",
        answer:`
        <h5>I have cockroaches in the apartment</h5>
        <p>The best way to eliminate cockroaches is by applying a gel like Magnum Gel specifically for cockroaches (which you can find on Amazon) to the areas that need treatment.<br>If the problem persists, please send an email to<a href="mailto:contact@finecribs.com">contact@finecribs.com</a></p>
        <h5>I have ants in the apartment</h5>
        <p>The best way to eliminate cockroaches is by applying a gel like Magnum Gel specifically for ants (which you can find on Amazon) to the areas that need treatment.<br>If the problem persists, please send an email to<a href="mailto:contact@finecribs.com">contact@finecribs.com</a></p>
        <h5>I have bed bugs in the apartment</h5>
        <p>In case you spot bed bugs, please send an email to <a href='mailto:contact@finecribs.com'>contact@finecribs.com</a> as we will need to coordinate a prompt intervention realized by a qualified professional</p>
        `,  
        src:"" 
    }
   ]   
},
{
    id:4,
    title:"Prepare your departure", 
    subTitles:[
        {
        id:0,
        title:"My check-out date is approaching, what should I do?",
        answer:"<p>You need to agree a check-out slot with the property manager (from Monday to Friday between 9 a.m. and 6 p.m.), At check-out, you will conduct a final inventory together to review the condition of your room and of the communal areas.</p>",  
        src:"" 
    },
    {
        id:1,
        title:"Shall I clean my room before I check-out?", 
        answer:"<p>Yes, you will find a clean room when you check-in, and we would kindly ask you to leave it clean when you leave. In case you are not able to do so, our staff can take care (50€ fee).</p>",  
        src:""
    },
    {
        id:2,
        title:"When will I receive my deposit?",
        answer:"<p>First of all, please make sure that you have filled out you bank account details on your Rentila account.<br/>The refund will be made within 1 month, except if:</p><ul><li>potential damages identified during the exit inventory require obtaining quotes from qualified professionals. In this case the refund will occur within 2 months</li><li>the estimated residual balance relating to electricity consumption exceeds 20% of the deposit. In this case the landlord will inform you within a month from check-out, and the refund will in any case occur within 2 months from check-out.</li></ul>",  
        src:"" 
    }
   ]  
  
}
]
// FaqspageTablePartnering
export const FaqspageTablePartnering = [
    {
        id:0,
        title:"",
        subTitles:[
            {
            id:0,
            title:"Help you decide",
            answer:`
            <h5>Why should I trust Finecribs?</h5>
            <p>First because we are also landlords, as you are. We put the exact same care and attention into managing your property as we put into managing our own properties. Second, we are very selective when it comes to finding tenants. Third, because we have teams of qualified professionals who ensure ongoing maintenance of your apartment. Fourth, because you will receive a steady rental payment regardless of whether your apartment is rented or not.</p>
            <h5>How long will Finecribs rent my property?</h5>
            <p>In general, Finecribs is looking to sign a long-term lease with each of our individual property owners. We prefer to take possession of properties for at least 6 years, but we would ideally favor longer periods.</p>
            <h5>Who will stay in my apartment?</h5>
            <p>We provide quality accommodation to an audience of selected international tenants, mostly composed of young professionals. We carefully review the applications to make sure only the best profiles are accepted. Your interests are always aligned with our interests.</p>
            <h5>Should my apartment be furnished or unfurnished?</h5>
            <p>Typically, we would be looking for at least a kitchen to be installed. We prefer unfurnished lettings as they give our interior designers the opportunity to design the space in accordance with our standards, but a minimum level of furnishing is also accepted.</p>
            <h5>What happens if Finecribs finds no tenants?</h5>
            <p>You will still receive a monthly rent from Finecribs, which means that there is no real change for you.</p>
            <h5>What happens if a tenant damages the property?</h5>
            <p>Finecribs, as tenant, is liable to the property owner for any damage caused by a tenant. Of course, we also get insurance, and we request all our tenants to do the same.</p>
            <h5>What do you mean by «smart refurbishment»?</h5>
            <p>In case your property needs some light refurbishment, e.g. repainting, renovating a bathroom or building a plastered wall, our teams can take care at no extra cost for you. The need for such initiatives will be considered in the offer that we will submit to you.</p>
            <h5>How do I know if my proerty qualifies?</h5>
            <p>You should submit a request through the form and our team will contact you to assess together whether your property qualifies. Typically, we look for properties in central locations, with at least three bedrooms and in overall good conditions.</p>
            <h5>Do you rent of also buy properties?</h5>
            <p>Our core expertise lies in acquiring, designing and managing beautiful spaces. In case you are uncertain whether to rent or sell your property we would be happy to discuss and possibly make an offer for acquiring the property instead of renting it.</p>
            `,  
            src:"" 
        }
       ]   
    }
]
