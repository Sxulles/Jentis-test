function inject(element,fill)
{
    if(element.id === "consent-bar-parent" && fill)
    {
        element.innerHTML = "<div class='jumbotron' id='consent-bar'><div class='container'><div class='row'><div class='col'><i class='fa fa-cogs fa-4x'></i></div><div class='col-md-8'><h3>This website uses Cookies.</h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident pariatur adipisci veniam! Assumenda voluptas ex modi corporis obcaecati temporibus voluptatum, quae eligendi quasi, tenetur nam soluta maiores sint minus dicta expedita fugit qui, architecto eaque quas? Perspiciatis distinctio eveniet dignissimos, voluptatum voluptate labore sit cumque ex voluptatem. Impedit, corrupti odit.</div><div class='col-md-2'><button class='btn btn-success' onclick='acceptAll();'>Accept All</button><button class='btn btn-success' onclick='acceptGa();'>Accept GA</button><button class='btn btn-dark' onclick='denyAll();'>Deny All</button></div></div></div></div>";
    }
    else
    {
        element.innerHTML = "";
    }
}