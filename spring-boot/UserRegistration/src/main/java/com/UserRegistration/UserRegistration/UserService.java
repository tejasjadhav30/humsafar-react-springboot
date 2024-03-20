package com.UserRegistration.UserRegistration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public User addUser(UserDTO userDTO) {
        String email = userDTO.getEmail();
        // Check if a user with the given email already exists
        if (userRepository.existsByEmail(email)) {
            throw new UserAlreadyExistsException("User with email " + email + " already exists.");
        }

        // If user does not exist, proceed with saving
        User user = new User();
        
        user.setEmail(email);
        user.setPassword(userDTO.getPassword());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setMobileNo(userDTO.getMobileNo());
        user.setGender(userDTO.getGender());

        return userRepository.save(user);
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    public void updateUser(User user, int id) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (!ObjectUtils.isEmpty(existingUser)) {
           
            existingUser.setEmail(user.getEmail());
            // Update other fields as needed
            userRepository.save(existingUser);
        }
    }

    public User loginUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

    // Other methods...

    // Custom exception for user already exists
    public static class UserAlreadyExistsException extends RuntimeException {
        public UserAlreadyExistsException(String message) {
            super(message);
        }
    }
}
