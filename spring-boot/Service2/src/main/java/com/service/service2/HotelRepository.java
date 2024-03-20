package com.service.service2;


import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
    // Custom queries can be added here if needed
}
