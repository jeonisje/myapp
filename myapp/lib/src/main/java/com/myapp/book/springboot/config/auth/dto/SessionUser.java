package com.myapp.book.springboot.config.auth.dto;

import java.io.Serializable;

import com.myapp.book.springboot.domain.user.User;

import lombok.Getter;

@Getter
public class SessionUser implements Serializable {
	private String name;
	private String email;
	private String picture;
	
	public SessionUser(User user) {
		this.name = user.getName();
		this.email = user.getEmail();
		this.picture = user.getPicture();
	}
}
