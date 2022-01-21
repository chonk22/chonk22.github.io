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

        //step 1 - get a referance to an entry point(s) (insertion/deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        let documentBody = document.body;

        //step 2 - Create a html element in memory
        let MainParagraph = document.createElement("p");
        let article = document.createElement("article");
        let articleParagraph = `<pid="articleParagraph" class="mt-3">this is the article paragragh</p>`;

        //3 configure new element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class","mt-3");
        let firstString = "this is";
        let secondString = `${firstString} the main paragraph`;
        MainParagraph.textContent = secondString;
        article.setAttribute("class","container");

        
        //4 perform insertion / deletion

        //example of insert after (append)
        MainContent.appendChild(MainParagraph);
        article.innerHTML = articleParagraph;
        documentBody.appendChild(article);
        

        //example of insert before
        //MainContent.before(MainParagraph);

        //example of deletion
        //document.getElementById("AboutUsButton").remove();
        //aboutUsButton.remove();

        //ES6 and HTML5 => Template strings => 


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
        
    }


    window.addEventListener("load", Start);


})();
 