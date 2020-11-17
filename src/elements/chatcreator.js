import React from 'react'
import { Picker } from "emoji-mart";

function Chatcreator({Crray}) {
    return (
        <section className="emoji-drawer">
        <form onSubmit={Crray.submitHandler} className="chat-form">
          <div className="chat-type-space">
            <img
              src={Crray.open ? "/text.svg" : "/smiley.svg"}
              alt="emoji"
              onClick={Crray.emojiDrawer}
              className="chat-emoji"
            />
            <input
              type="text"
              name="text"
              placeholder="Type a message"
              onChange={(e) => Crray.settext(e.target.value)}
              autoComplete="off"
              value={Crray.text}
            />
          </div>
          <button type="submit" disabled={Crray.text.length <= 1 ? true : false}>
            <img src="/send.svg" id="chat-send" alt="send" />
          </button>
        </form>
        {Crray.open && <Picker onSelect={Crray.putEmoji} style={{width:"100vw"}}/>}
      </section>
    )
}

export default Chatcreator
