// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package pittheo.projects.template.domain;

import java.lang.String;

privileged aspect Message_Roo_ToString {
    
    public String Message.toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Content: ").append(getContent()).append(", ");
        sb.append("Flagged: ").append(getFlagged()).append(", ");
        sb.append("Folder: ").append(getFolder()).append(", ");
        sb.append("Id: ").append(getId()).append(", ");
        sb.append("IsRead: ").append(getIsRead()).append(", ");
        sb.append("LastViewed: ").append(getLastViewed()).append(", ");
        sb.append("Receiver: ").append(getReceiver()).append(", ");
        sb.append("Sender: ").append(getSender()).append(", ");
        sb.append("SentAt: ").append(getSentAt()).append(", ");
        sb.append("Spam: ").append(getSpam()).append(", ");
        sb.append("Subject: ").append(getSubject()).append(", ");
        sb.append("Type: ").append(getType()).append(", ");
        sb.append("Version: ").append(getVersion());
        return sb.toString();
    }
    
}