package com.main.model;

public class Cache {

    private String personId;
    private String env;
    private String cacheId;

    public Cache(String personId, String env, String cacheId) {
        this.personId = personId;
        this.env = env;
        this.cacheId = cacheId;
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

    public String getCacheId() {
        return cacheId;
    }

    public void setCacheId(String cacheId) {
        this.cacheId = cacheId;
    }
}
