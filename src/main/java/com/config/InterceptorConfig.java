package com.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import com.interceptor.AuthorizationInterceptor;

@Configuration
public class InterceptorConfig extends WebMvcConfigurationSupport {

	@Bean
	public AuthorizationInterceptor getAuthorizationInterceptor() {
		return new AuthorizationInterceptor();
	}

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(getAuthorizationInterceptor())
				.addPathPatterns("/**")
				.excludePathPatterns(
						"/static/**",
						"/admin/**",
						"/front/**",
						"/upload/**"
				);
		super.addInterceptors(registry);
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/static/**")
				.addResourceLocations("classpath:/static/");

		registry.addResourceHandler("/admin/**")
				.addResourceLocations("classpath:/admin/admin/dist/");

		registry.addResourceHandler("/front/**")
				.addResourceLocations("classpath:/front/front/dist/");

		registry.addResourceHandler("/upload/**")
				.addResourceLocations("classpath:/static/upload/");

		super.addResourceHandlers(registry);
	}
}