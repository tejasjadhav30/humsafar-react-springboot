package com.service.service2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class HotelBooking {

    public static void main(String[] args) {
        SpringApplication.run(HotelBooking.class, args);
        System.out.println("Hotel Booking Service");
    }

}
