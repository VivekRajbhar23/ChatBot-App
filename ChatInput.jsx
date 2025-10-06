
            import { useState } from 'react'
            import {Chatbot} from 'supersimpledev';

            
            
            export function ChatInput({chatMessages, setChatMessages}){
              
              const [inputText, setInputText] = useState('');

              function saveInputText(event)
              {
                   setInputText(event.target.value);
              }

               async function sendMessage()
              {
                  const newChatMessages = [
                       ...chatMessages,
                       {
                        message: inputText,
                        sender:'user',
                        id : crypto.randomUUID()
                       }
                   ];       

                   setChatMessages(newChatMessages);  

                   const response = await Chatbot.getResponseAsync(inputText);
                   setChatMessages([
                       ...newChatMessages,
                       {
                        message: response,
                        sender:'robot',
                        id : crypto.randomUUID()
                       }
                   ]); 
                   
                   setInputText(''); 

              }

                function handleKeyDown(event) {
                       if (event.key === 'Enter') {
                      sendMessage();
                       }
                       else if(event.key === 'Escape')
                       {
                         saveInputText('');
                       }
                   }

                return (
                    <div className="chat-input-container">
                      <input className="chat-input" type="text"
                        placeholder = "Send a message to chatbot"
                        size="30"
                        onChange={saveInputText}
                        onKeyDown={handleKeyDown}
                        value={inputText}
                      />
                      <button className="send-button" onClick={sendMessage}>Send</button>
                    </div>
                );
            }

            
