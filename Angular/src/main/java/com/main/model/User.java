package com.main.model;

public class User {

    private String userId;
    private String personId;
    private String env;

    public User(String userId, String personId, String env) {
        this.userId = userId;
        this.personId = personId;
        this.env = env;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPersonId() {
        return personId;
    }

    public void setPersonId(String personId) {
        this.personId = personId;
    }

    public String getEnv() {
        return env;
    }

    public void setEnv(String env) {
        this.env = env;
    }
}
