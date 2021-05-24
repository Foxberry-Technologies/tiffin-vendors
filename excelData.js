var vendorListDiv=document.getElementById("vendor-list");
var template="";
var vendorListArr=[
   //Hotel Kartik
    {
        MerchantName:"Hotel Kartik",        
        Image: "Images/hotel kartik.jpeg",
        Contact: "9975567371",
        DealPrice: "99",
        DealDiscription:"Chapati:- 04  Bhaji:- 01, Dal : 01, salad, Rice One Bowl. Papad",
        TermsandCondition: "1) Order is accepted one day prior with name area and phone no, along with no of tiffins.<br/>2) Delivery in PCMC Area.<br/><b>Disclamer<br/>PCMC Smart Sarathi is not responsible for quality Delivery & Payment, Its only providing Listing services. Payment terms & Condition should be finalised between Buyer & Seller </b>",
        Address:"Gat no.398,Dehu Alandi Road ,Near Ganesh Engineers,Canbay Chowk,Talawade.",
    },

    //Bhave Catering Servcies
    {
        MerchantName:"Bhave Catering Services",        
        Image: "Images/bhave catering services.jpeg",
        Contact: "9766594868",
        DealPrice: "99",
        DealDiscription:"Chapati:- 04  Bhaji:- 01, Dal : 01, salad, Rice One Bowl. Papad",
        TermsandCondition: "1) Order is accepted one day prior with name area and phone no, along with no of tiffins.<br/>2) Delivery in PCMC Area.<br/><b>Disclamer<br/>PCMC Smart Sarathi is not responsible for quality Delivery & Payment, Its only providing Listing services. Payment terms & Condition should be finalised between Buyer & Seller </b>",
        Address:"Survey No.103 /1, Kinara colony A satsang road, Vijay nagar, Kalewadi, Pune 411017",
    },

    //Nish's Kitchen
    {
        MerchantName:"Nishi’s Kitchen",        
        Image: "/Images/nishs kitchen.jpeg",
        Contact: 8308810562,
        DealPrice: 99,
        DealDiscription:"Dal, Rice Sabzi, 3 Chapati Salad (Complimentary)",
        TermsandCondition: "1) Order is accepted one day prior with name area and phone no, along with no of tiffins.<br/>2) 2) Delivery in PCMC Area. ( Charges Applicable as per Actual)<br/><b>Disclamer<br/>PCMC Smart Sarathi is not responsible for quality Delivery & Payment, Its only providing Listing services. Payment terms & Condition should be finalised between Buyer & Seller </b>",
        Address:"Mont Vert Tropez, Rd, Shankar Kalat Nagar Wakad",
    },

   //ranade Snack center and Rudra catering services
    {
    MerchantName:"Ranade Snacks center And Rudra catering services",
    Image: "Images/ranade snacks center.png",
    Contact: 8600140539,
    DealPrice: 99,
    DealDiscription:"Chapati:- 03 ,Bhaji:- 01, Dal: 01, salad, Rice one bowl.",
    TermsandCondition: "1)Order is accepted one day prior with name area and phone no, along with no of tiffins.<br/>2)Delivery in Chinchwad  between radius of 4 km.<br/><b> Disclamer<br/>PCMC Smart Sarathi is not responsible for quality Delivery & Payment, Its only providing listing services. Payment terms & Condition should be finalised between Buyer & Seller </b>",
    Address:"5/6 1st floor pragati apts near kartik hospital Shridhar nagar chinchwad",
   },

   //Green leaf catering
   {
    MerchantName:"Green leaf catering",
    Image: "Images/greenleaf.jpeg",
    Contact: 8208830785,
    DealPrice: 99,
    DealDiscription:"Chapati:- 04 Or 2 Bhakri, Bhaji:- 01, Dal: 01, salad, Rice One Bowl.",
    TermsandCondition: "1) Order is accepted one day prior with name area and phone no, along with no of tiffins<br/>.2) Delivery in Pink city road wakad between radius of 3 km.<br/><b>DisclamerPCMC Smart Sarathi is not responsible for quality Delivery & Payment, Its only providing Listing services. Payment terms & Condition should be finalised between Buyer & Seller</b>",
    Address:"F 604 , Aswani Galaxy Next to Palash Plus society pink city road Wakad Pune 411057",
   },

   //Girija cateras
   {
    MerchantName:"गिरीजा केटरर्स",
    Image: "/Images/girija cateras.jpeg",
    Contact: "9075031440,9552551365",
    DealPrice: 99,
    DealDiscription:"Veg Gravy Dish , Chapati:-03 , Dal, Rice Salad, Raita.",
    TermsandCondition: "1) Order is accepted one day prior with name area and phone no, along with no of tiffins.<br/>2)Delivery in Nigdi, Pradikaran, Akurdi, Ravet. Radius of 3 KM.<br/><b>Disclamer<br/>PCMC Smart Sarathi is not responsible for quality Delivery & Payment, Its only providing Listing services. Payment terms & Condition should be finalised between Buyer & Seller</b>",
    Address:"Sector no 26, serve no 245, Plot B, next to mukbadhir school, pradhikaran road, Pradhikaran, Nigdi, Pune 411044.",
   },

   //Saisamarth Food Service
   {
    MerchantName:"Saisamarth Food Service",
    Image: "/Images/sai samarth.jpeg",
    Contact: "8446601057",
    DealPrice: "99",
    DealDiscription:"Chapati:- 03  Bhaji:- 01, Dal/Kadi/Gravy : 01, salad, Rice One Bowl.",
    TermsandCondition: "1)Order is accepted one day prior with name area and phone no, along with no of tiffins.<br/>2)2)Delivery in bopodi, Dapodi, Sangvi,Aundh,Pimple Gurav, Pimple saudagar. Radius of 3 KM <br/><b> Disclamer<br/>PCMC Smart Sarathi is not responsible for quality Delivery & Payment, Its only providing listing services. Payment terms & Condition should be finalised between Buyer & Seller </b>",
    Address:"Bhimashankar colony, Pimple gurav, lane no 1, 411061 pune.",
   },

   //Samarth Bhojanalay Tiffin Services
   {
    MerchantName:"Samarth Bhojanalay Tiffin Services",
    Image: "/Images/samarth bhojanalay.jpeg",
    Contact: "9881133694",
    DealPrice: "99",
    DealDiscription:"Chapati:- 04  Bhaji:- 01, Dal : 01, salad, Rice One Bowl. Papad",
    TermsandCondition: "1)Order is accepted one day prior with name area and phone no, along with no of tiffins.<br/>2)Sangvi, New Sangvi,pimple Gurav, pimple saudagar,pimple nilakh, Jagtap Dairy, Kalewadi, Rahatni<br/><b> Disclamer<br/>PCMC Smart Sarathi is not responsible for quality Delivery & Payment, Its only providing listing services. Payment terms & Condition should be finalised between Buyer & Seller </b>",
    Address:"Onkar colony,  pimple gurav, pune 411061",   
   },
];

for (i = 0; i < vendorListArr.length; i++) {

    var vendor = vendorListArr[i];
    console.log(vendor);
    var html_template = `
    <div class="container-fluid">
            <section>
                <header>
                    <h1 id="head">${vendor.MerchantName}</h1>
                </header>
            </section>
            
            <div id="img">
                <img src="${vendor.Image}" class="img-thumbnail" alt="thali" class="img-responsive" style="width:100%;height:300px"/>
            </div>
             <div>
                <h6>Deal Price:- ${vendor.DealPrice}</h6>
            </div>
            
            <div>
                <h6 style="text-align: left;">Deal Discription:-<br/>
                ${vendor.DealDiscription}</h6>
            </div>
            <div>
                <label><b>Contact</b></label>
                <a href="tel:${vendor.Contact}">${vendor.Contact}</a>
            </div>
           <div>
                <label><b>Terms & Conditions:-</b></label>
                    <ul>
                        ${vendor.TermsandCondition}
                    </ul>
            </div>
            
            <div>
                <label><b>Address</b></label>
                <address>
                    <a target="_blank" href="https://maps.google.com/maps?q=${vendor.Address}">
                    ${vendor.Address}
                    </a>
                </address>
            </div>
             </div>
`;

    template = template + html_template;

}

vendorListDiv.innerHTML = template;