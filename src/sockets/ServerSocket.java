package sockets;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.ArrayList;

@ServerEndpoint("/ServerSocket")
public class ServerSocket  {
    private static ArrayList<Session> sessionsList = new ArrayList<>();
    private static ArrayList<String> messagesList = new ArrayList<>();

    @OnOpen
    public void onOpen(Session session){
        try{
            sessionsList.add(session);
            RemoteEndpoint.Basic remote = session.getBasicRemote();
            for (String message : messagesList) {
                remote.sendText(message);
            }
        }catch(IOException e){
            System.err.println(e.getMessage());
        }
    }

    @OnMessage
    public void onMessage(String message){
        if (message != null && !message.trim().isEmpty()) {
            try{
                messagesList.add(message);
                for(Session session : sessionsList){
                    session.getBasicRemote().sendText(message);
                }
            }catch(IOException e){
                System.err.println(e.getMessage());
            }
        }
    }

    @OnClose
    public void onClose(Session session){
        sessionsList.remove(session);
    }
}
