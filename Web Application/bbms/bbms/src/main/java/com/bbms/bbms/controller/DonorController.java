package com.bbms.bbms.controller;

import com.bbms.bbms.dto.DonorDTO;
import com.bbms.bbms.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/donors")
public class DonorController {

    @Autowired
    private DonorService donorService;

    @PostMapping
    public DonorDTO addDonor(@RequestBody DonorDTO donorDTO) {
        return donorService.addDonor(donorDTO);
    }

    @GetMapping
    public List<DonorDTO> getAllDonors() {
        return donorService.getAllDonors();
    }

    @GetMapping("/{id}")
    public DonorDTO getDonorById(@PathVariable Long id) {
        return donorService.getDonorById(id);
    }

    @PutMapping("/{id}")
    public DonorDTO updateDonor(@PathVariable Long id, @RequestBody DonorDTO donorDTO) {
        return donorService.updateDonor(id, donorDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteDonor(@PathVariable Long id) {
        donorService.deleteDonor(id);
    }
}
