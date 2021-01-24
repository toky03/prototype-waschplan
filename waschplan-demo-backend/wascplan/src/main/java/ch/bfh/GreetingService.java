package ch.bfh;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class GreetingService {

    public String greetNew(){
        return "Hallo Welt";
    }
}
