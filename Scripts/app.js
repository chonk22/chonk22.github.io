// IIFE -- Immediately Invoked Function Express
// AKA anonymous self-executing function
(function()
{
    function DisplayHome()
    {
        let aboutUsButton = document.getElementById("AboutUsButton");
        aboutUsButton.addEventListener("click",function()
        {
            location.href = "about.html";
        });
    }

    //names function
    function Start()
    {
        console.log("App Started!!");
        
        switch(document.title)
        {
            case "Home":
                DisplayHome();
                break;
        }
        let aboutUsButton = document.getElementById("AboutUsButton");
        console.log(aboutUsButton);
    }


    window.addEventListener("load", Start);


})();
 