const LoadingScreen = ()=>{

    const loadingComponent = document.querySelector(".loading-screen");
    const Loading = ()=>{
        let text = "...";
        let i = 0;
        if (i<text.length){
            loadingComponent.textContent += text.charAt(i)
            i++;
            setTimeout(Loading, 100);
        }else{
            setTimeout(()=>{
                loadingComponent.textContent = "";
                i = 0;
                Loading();
            },1000);
        }
    }

    return (
        <div>
            <p>Loading<span className="loading-screen"></span></p>
        </div>
    );
};

export default LoadingScreen;