package com.bbms.bbms.service;

import com.bbms.bbms.dto.DonorDTO;
import com.bbms.bbms.model.Donor;
import com.bbms.bbms.repository.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DonorServiceImpl implements DonorService {

    @Autowired
    private DonorRepository donorRepository;

    @Override
    public DonorDTO addDonor(DonorDTO donorDTO) {
        Donor donor = new Donor();
        donor.setName(donorDTO.getName());
        donor.setBloodType(donorDTO.getBloodType());
        donor.setContactNo(donorDTO.getContactNo());
        donor.setAddress(donorDTO.getAddress());
        donor = donorRepository.save(donor);
        return new DonorDTO(donor.getId(), donor.getName(), donor.getBloodType(), donor.getContactNo(), donor.getAddress());
    }

    @Override
    public List<DonorDTO> getAllDonors() {
        return donorRepository.findAll().stream()
                .map(donor -> new DonorDTO(donor.getId(), donor.getName(), donor.getBloodType(), donor.getContactNo(), donor.getAddress()))
                .collect(Collectors.toList());
    }

    @Override
    public DonorDTO getDonorById(Long id) {
        Donor donor = donorRepository.findById(id).orElseThrow(() -> new RuntimeException("Donor not found"));
        return new DonorDTO(donor.getId(), donor.getName(), donor.getBloodType(), donor.getContactNo(), donor.getAddress());
    }

    @Override
    public DonorDTO updateDonor(Long id, DonorDTO donorDTO) {
        Donor donor = donorRepository.findById(id).orElseThrow(() -> new RuntimeException("Donor not found"));
        donor.setName(donorDTO.getName());
        donor.setBloodType(donorDTO.getBloodType());
        donor.setContactNo(donorDTO.getContactNo());
        donor.setAddress(donorDTO.getAddress());
        donor = donorRepository.save(donor);
        return new DonorDTO(donor.getId(), donor.getName(), donor.getBloodType(), donor.getContactNo(), donor.getAddress());
    }

    @Override
    public void deleteDonor(Long id) {
        donorRepository.deleteById(id);
    }
}
