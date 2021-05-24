var vendorListDiv=document.getElementById("vendor-list");
var template="";

var vendorListArr=[
    //Hotel Kartik
     {
         MerchantName:"हॉटेल कार्तिक",        
         Image: "Images/hotel kartik.jpeg",
         Contact: "९९७५५६७३७१",
         DealPrice: "९९",
         DealDiscription:"चपाती ०४, भाजी ०१, डाळ १ सलाड, भात १ वाटी",
         TermsandCondition: "1)नाव, पत्ता, फोन नंबर आणि टिफिनची संख्या याची माहिती एक दिवस आधी देऊन आधी बुकिंग करणे आवश्यक आहे.<br/>2) पिंपरी चिंचवडमध्ये घरपोच सुविधा.<br/><b>सूचना<br/>सदर माहिती पिंपरी चिंचवड शहरातील नागरिकांना माहिती होण्याच्या उद्देशाने प्रसारित करण्यात आली आहे .सेवा सुरु असण्याबाबत गुणवत्ता , दर्जा व सदर सेवांची दर याबाबत संबंधित पुरवठा धारकाकारून माहिती घेणे.</b>",
         Address:"गट क्रमांक ३९८, देहू आळंदी रस्ता, गणेश इंजिनियर्स, कॅन्बे चौक, तळवडे",
     },

     //Bhave Catering Services
     {
            MerchantName:"भावे केटरिंग सर्व्हिस",        
            Image: "Images/bhave catering services.jpeg",
            Contact: "९७६६५९४८६८",
            DealPrice: "९९",
            DealDiscription:"चपाती ०४, भाजी ०१, डाळ १ सलाड, सलाड, भात १ वाटी, पापड",
            TermsandCondition: "1)नाव, पत्ता, फोन नंबर आणि टिफिनची संख्या याची माहिती एक दिवस आधी देऊन आधी बुकिंग करणे आवश्यक आहे.<br/>2) पिंपरी चिंचवडमध्ये घरपोच सुविधा.<br/><b>सूचना<br/>सदर माहिती पिंपरी चिंचवड शहरातील नागरिकांना माहिती होण्याच्या उद्देशाने प्रसारित करण्यात आली आहे .सेवा सुरु असण्याबाबत गुणवत्ता , दर्जा व सदर सेवांची दर याबाबत संबंधित पुरवठा धारकाकारून माहिती घेणे.</b>",
            Address:"सर्व्हे क्रमांक १०३/१,किनारा कॉलनी ए, सत्संग रोड, विजय नगर , काळेवाडी, पुणे ४११०१७",
     },

     //Nish's Kitchen
     {
        MerchantName:"निशी किचन",        
        Image: "/Images/nishs kitchen.jpeg",
        Contact: "८३०८८१०५६२",
        DealPrice: "९९",
        DealDiscription:"Dal, Rice Sabzi, 3 Chapati Salad (Complimentary)",
        TermsandCondition: "1)नाव, पत्ता, फोन नंबर आणि टिफिनची संख्या याची माहिती एक दिवस आधी देऊन आधी बुकिंग करणे आवश्यक आहे.<br/>2) पिंपरी चिंचवडमध्ये घरपोच सुविधा.<br/><b>सूचना<br/>सदर माहिती पिंपरी चिंचवड शहरातील नागरिकांना माहिती होण्याच्या उद्देशाने प्रसारित करण्यात आली आहे .सेवा सुरु असण्याबाबत गुणवत्ता , दर्जा व सदर सेवांची दर याबाबत संबंधित पुरवठा धारकाकारून माहिती घेणे.</b>",
        Address:"मोंट व्हर्ट ट्रोपेझ, शंकर कलाट नगर वाकड",
     },

     //ranade Snack center and Rudra catering services
    {
        MerchantName:"रानडे स्नॅक्स सेंटर अॅण्ड रुद्र केटरिंग सर्व्हिसेस",
        Image: "Images/ranade snacks center.png",
        Contact: "८६००१४०५३९",
        DealPrice: "९९",
        DealDiscription:"३ चपाती, १ भाजी, १  डाळ, १  भात.",
        TermsandCondition: "1)नाव, पत्ता, फोन नंबर आणि टिफिनची संख्या याची माहिती एक दिवस आधी देऊन आधी बुकिंग करणे आवश्यक आहे.<br/>2)चिंचवडमध्ये ४ किमीच्या परिसरात घरपोच सुविधा.<br/><b>सूचना<br/>सदर माहिती पिंपरी चिंचवड शहरातील नागरिकांना माहिती होण्याच्या उद्देशाने प्रसारित करण्यात आली आहे .सेवा सुरु असण्याबाबत गुणवत्ता , दर्जा व सदर सेवांची दर याबाबत संबंधित पुरवठा धारकाकारून माहिती घेणे.</b>",
        Address:"५/६ पहिला मजला, प्रगती अपार्टमेंट, कार्तिक हॉस्पिटल, श्रीधर नगर, चिंचवड",
     },
    
     //Green leaf catering
     {
        MerchantName:"ग्रीन लिफ केटरिंग",
        Image: "Images/greenleaf.jpeg",
        Contact: "८२०८८३०७८५",
        DealPrice: "९९",
        DealDiscription:"४ चपाती किंवा २ भाकरी, १ भाजी, सलाड, १ वाटी भात.",
        TermsandCondition: "1)नाव, पत्ता, फोन नंबर आणि टिफिनची संख्या याची माहिती एक दिवस आधी देऊन आधी बुकिंग करणे आवश्यक आहे.<br/>पिंक सिटी रोड, वाकडमध्ये ३ किमीच्या परिसरात घरपोच सुविधा.<br/><b>सूचना<br/>सदर माहिती पिंपरी चिंचवड शहरातील नागरिकांना माहिती होण्याच्या उद्देशाने प्रसारित करण्यात आली आहे .सेवा सुरु असण्याबाबत गुणवत्ता , दर्जा व सदर सेवांची दर याबाबत संबंधित पुरवठा धारकाकारून माहिती घेणे.</b>",
        Address:"एफ ६०४, आसवानी गॅलक्सी, पलाश प्लस सोसायटीसमोर, पिंक सिटी रोड, वाकड, पुणे ४११०५७",
     },

      //Girija cateras
      {
        MerchantName:"गिरीजा केटरर्स",
        Image: "/Images/girija cateras.jpeg",
        Contact: "९0७५0३१४४0, ९५५२५५१३६५",
        DealPrice: "९९",
        DealDiscription:"३ चपाती, १ भाजी, १  डाळ, १  भात.",
        TermsandCondition: "1)नाव, पत्ता, फोन नंबर आणि टिफिनची संख्या याची माहिती एक दिवस आधी देऊन आधी बुकिंग करणे आवश्यक आहे.<br/>2)निगडी,प्राधिकरण, आकुर्डी, रावेतमध्ये ३ किमीच्या परिसरात घरपोच सुविधा.<br/><b>सूचना<br/>सदर माहिती पिंपरी चिंचवड शहरातील नागरिकांना माहिती होण्याच्या उद्देशाने प्रसारित करण्यात आली आहे .सेवा सुरु असण्याबाबत गुणवत्ता , दर्जा व सदर सेवांची दर याबाबत संबंधित पुरवठा धारकाकारून माहिती घेणे.</b>",
        Address:"सेक्टर क्रमांक २६, सर्व्हे क्रमांक २४५, मुकबधीर शाळेजवळ, प्राधिकरण रोड, प्राधिकरण, निगडी, पुणे, ४११०४४",
      },

       //Saisamarth Food Service
       {
        MerchantName:"Saisamarth Food Service",
        Image:"/Images/sai samarth.jpeg",
        Contact: "८४४६६०१०५७",
        DealPrice: "९९",
        DealDiscription:"३ चपाती, १ भाजी, १ डाळ /  कढी /ग्रेव्ही: ०१, सलाड",
        TermsandCondition: "1)नाव, पत्ता, फोन नंबर आणि टिफिनची संख्या याची माहिती एक दिवस आधी देऊन आधी बुकिंग करणे आवश्यक आहे.<br/>2)बोपोडी, सांगावी, औंध, पिंपळे गुरव, पिंपळे सौदागरमध्ये ३ किमीच्या परिसरात घरपोच सुविधा.<br/><b>सूचना<br/>सदर माहिती पिंपरी चिंचवड शहरातील नागरिकांना माहिती होण्याच्या उद्देशाने प्रसारित करण्यात आली आहे .सेवा सुरु असण्याबाबत गुणवत्ता , दर्जा व सदर सेवांची दर याबाबत संबंधित पुरवठा धारकाकारून माहिती घेणे.</b>",
        Address:"भीमाशंकर कॉलनी, पिंपळे गुरव, गल्ली क्रमांक १, ४११०६१, पुणे",
      },

       //Samarth Bhojanalay Tiffin Services
       {
        MerchantName:"समर्थ भोजनालय टिफिन सर्व्हिस",
        Image:"/Images/samarth bhojanalay.jpeg",
        Contact: "९८८११३३६९४",
        DealPrice: "९९",
        DealDiscription:"चपाती ०४, भाजी ०१, डाळ १ सलाड, सलाड, भात १ वाटी",
        TermsandCondition: "1)नाव, पत्ता, फोन नंबर आणि टिफिनची संख्या याची माहिती एक दिवस आधी देऊन आधी बुकिंग करणे आवश्यक आहे.<br/>2)2) Sangvi, New Sangvi,pimple Gurav, pimple saudagar,pimple nilakh, Jagtap Dairy, Kalewadi, Rahatni.<br/><b>सूचना<br/>सदर माहिती पिंपरी चिंचवड शहरातील नागरिकांना माहिती होण्याच्या उद्देशाने प्रसारित करण्यात आली आहे .सेवा सुरु असण्याबाबत गुणवत्ता , दर्जा व सदर सेवांची दर याबाबत संबंधित पुरवठा धारकाकारून माहिती घेणे.</b>",
        Address:"ओंकार कॉलनी, पिंपळे गुरव, पुणे ४११०६१",   
       }
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