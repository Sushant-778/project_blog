const Create = () => {
  return (
     <main className=" center-child | w-full h-[calc(100vh-20rem)] p-2  flex gap-1 mx-4">
       <section className=" w-[85%]  flex flex-col gap-1">
           
           <input type="text"
           className="w-full bg-dim-text h-16 rounded-sm border border-gray-400 p-3 text-lg font-bold  text-black  focus:outline-none placeholder:font-medium " placeholder="Your title here..."/>
           
           <textarea className="mb-3 w-full rounded-sm border border-gray-400 p-3 text-sm focus:outline-none  text-heading-text" rows={15} placeholder="Your content here..."></textarea>
        </section>
       
       
<aside className="bg-[#2E2E2E]  h-97 w-[15%] p-2  rounded-sm text-sm  flex flex-col 
sticky top-20 text-heading-text border border-gray-400 ">
            <div className=" h-[25%] ">
                <h2 className="font-semibold">
                 Tools 
                </h2>
                <hr/>
                <div className="p-2 flex items-center gap-2 ">
                    <button className="tools"><img src="../Images/icons8-bold-100.png" alt=""/></button>
                    <button className="tools"><img src="../Images/icons8-italic-100.png" alt=""/></button>
                    <button className="tools"><img src="../Images/icons8-underline-100.png" alt=""/></button>
                    <button className="tools p-1 ">
                        <img src="../Images/icons8-strikethrough-100.png" alt=""  />
                    </button>
                </div>
            </div>
            <div className=" h-[60%] ">
                <h2 className="font-semibold">
                    Media & Links   
                </h2>
                <hr/>
                <div className="p-2 flex flex-col items-center gap-2 ">
                    <button className="m-d-buttons">
                        <img src="../Images/icons8-picture-96.png" alt=""/>Image</button>
                    <button className="m-d-buttons">
                        <img src="../Images/icons8-curly-brackets-96.png" alt=""/>Code block</button>
                    <button className="m-d-buttons">
                        <img src="../Images/icons8-embed-100.png" alt="" />Embed</button>
                    <button className="m-d-buttons"></button>
                </div>
            </div>
            <div>
                <h2 className="font-semibold">
                    Publish  
                </h2>
                <hr/>
                <div className=" mt-2 h-auto flex items-center justify-between gap-1">
                    <button className="bg-transparent h-[50%] w-[55%] py-2 px-0.5 rounded-sm border border-gray-200 text-xs text-gray-350
                     ">
                        Save Draft
                    </button>
                    <button className=" h-[50%] w-[60%] rounded-sm py-2 px-1 text-xs bg-[#0016cc] text-heading-text border border-blue-700">
                        Publish  
                        
                    </button>
                </div>
            </div>
        </aside>
    </main>
)
}

export default Create
