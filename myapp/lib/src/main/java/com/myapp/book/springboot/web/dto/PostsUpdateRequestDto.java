package com.myapp.book.springboot.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostsUpdateRequestDto {
	private String title;
	private String content;
	
	@Builder
	public PostsUpdateRequestDto(String title, String content, String author) {
		this.title = title;
		this.content = content;
	}
}
