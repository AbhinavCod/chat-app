const Message  = ()=>{
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="" alt="Tailwindcss chat bubble ;component"></img>
                </div>
            </div>

            <div className={"chat-bubble text-white bg-blue-500"}>hii! What's up ?</div>
            <div className={"chat-footer opacity-50 flex gap-1 items-center"}>12.02</div>
        </div>
    )
};

export default Message;