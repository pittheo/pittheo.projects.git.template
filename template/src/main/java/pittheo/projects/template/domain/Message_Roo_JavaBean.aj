// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package pittheo.projects.template.domain;

import java.lang.Boolean;
import java.lang.String;
import java.util.Date;
import pittheo.projects.template.domain.MessageType;
import pittheo.projects.template.domain.UserAccount;

privileged aspect Message_Roo_JavaBean {
    
    public MessageType Message.getType() {
        return this.type;
    }
    
    public void Message.setType(MessageType type) {
        this.type = type;
    }
    
    public UserAccount Message.getSender() {
        return this.sender;
    }
    
    public void Message.setSender(UserAccount sender) {
        this.sender = sender;
    }
    
    public UserAccount Message.getReceiver() {
        return this.receiver;
    }
    
    public void Message.setReceiver(UserAccount receiver) {
        this.receiver = receiver;
    }
    
    public Boolean Message.getIsRead() {
        return this.isRead;
    }
    
    public void Message.setIsRead(Boolean isRead) {
        this.isRead = isRead;
    }
    
    public String Message.getSubject() {
        return this.subject;
    }
    
    public void Message.setSubject(String subject) {
        this.subject = subject;
    }
    
    public String Message.getContent() {
        return this.content;
    }
    
    public void Message.setContent(String content) {
        this.content = content;
    }
    
    public Date Message.getSentAt() {
        return this.sentAt;
    }
    
    public void Message.setSentAt(Date sentAt) {
        this.sentAt = sentAt;
    }
    
    public Boolean Message.getFlagged() {
        return this.flagged;
    }
    
    public void Message.setFlagged(Boolean flagged) {
        this.flagged = flagged;
    }
    
    public Boolean Message.getSpam() {
        return this.spam;
    }
    
    public void Message.setSpam(Boolean spam) {
        this.spam = spam;
    }
    
    public Date Message.getLastViewed() {
        return this.lastViewed;
    }
    
    public void Message.setLastViewed(Date lastViewed) {
        this.lastViewed = lastViewed;
    }
    
    public String Message.getFolder() {
        return this.folder;
    }
    
    public void Message.setFolder(String folder) {
        this.folder = folder;
    }
    
}
