import RobotProfileImage from '../assets/robot image.jpg';
import UserProfileImage from '../assets/user image.jpg';
 
 export function ChatMessage({message, sender}) 
            {
              // const message = props.message;
              // const sender = props.sender;

              //const {message, sender} = props;

             /* if(sender === 'robot'){
                return (
                <div>
                   <img  src="robot image.jpg" width="50"/>
                   {message}
                </div>
              );
              }*/

              return (
                <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
                  {sender === 'robot' && (
                    <img src={RobotProfileImage} className="chat-message-profile"/>
                  )}
                  <div className="chat-message-text">
                   {message}
                   </div>
                {sender === 'user' && (
                  <img src={UserProfileImage} className="chat-message-profile"/>
                )}
                </div>
              );

            }
