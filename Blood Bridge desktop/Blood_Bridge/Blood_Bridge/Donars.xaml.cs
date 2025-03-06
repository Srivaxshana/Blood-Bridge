using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using System.Collections.Generic;
using System.Drawing;

namespace Blood_Bridge
{
    /// <summary>
    /// Interaction logic for Donars.xaml
    /// </summary>
    public partial class Donars : Window
    {
        private DataBaseHelper _dbHelper;
        private Donar selectedDonor;
        public Donars()
        {
            InitializeComponent();
            _dbHelper = new     DataBaseHelper();
            _dbHelper.InitializeDatabase();
            LoadDonors();
        }

        private void LoadDonors()
        {

            donorGrid.ItemsSource = null;
            donorGrid.ItemsSource = _dbHelper.GetAllDonors();
            //donorGrid.ItemsSource = null;
            //donorGrid.ItemsSource = _dbHelper.GetAllDonors();
            /* // Fetch the list of donors from the database
             var donors = _dbHelper.GetAllDonors();

             // Debugging message to check what donors are being loaded
             Console.WriteLine("Loaded Donors:");
donorGrid.ItemsSource = null;
donorGrid.ItemsSource = _dbHelper.GetAllDonors();                                                                   foreach (var donor in donors)
             {
                 // Print each donor's details to the console
                 Console.WriteLine($"Donor: {donor.Name},{donor.BloodType}, {donor.Contact}, {donor.Address}");
             }

             // Set the ListBox's items source to the list of donors
             lstDonors.ItemsSource = donors;
            */
        }

        private void donorGrid_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (donorGrid.SelectedItem != null)
            {
                selectedDonor = donorGrid.SelectedItem as Donar;
                if (selectedDonor != null)
                {
                    txtName.Text = selectedDonor.Name;
                    //txtAge.Text = selectedDonor.Age;
                    txtAge.Text = selectedDonor.Age.ToString();
                    //txtDOB.Text = selectedDonor.DOB;
                    txtDOB.Text = selectedDonor.DOB.ToString("yyyy-MM-dd");
                    txtGender.Text = selectedDonor.Gender;
                    txtBloodType.Text = selectedDonor.BloodType;
                    txtContact.Text = selectedDonor.Contact;
                    txtEmail.Text = selectedDonor.Email;
                    txtAddress.Text = selectedDonor.Address;
                    txtCity.Text = selectedDonor.City;
                    txtDistrict.Text = selectedDonor.District;
                }
            }
        }


        private void OnAddDonor(object sender, RoutedEventArgs e)
        {
            var donor = new Donar
            {
                Name = txtName.Text,
                //Age = txtAge.Text,
                Age = int.Parse(txtAge.Text),
                //DOB = txtDOB.Text,
                DOB = DateTime.Parse(txtDOB.Text),
                Gender = txtGender.Text,
                BloodType = txtBloodType.Text,
                Contact = txtContact.Text,
                Email = txtEmail.Text,
                Address = txtAddress.Text,
                City = txtCity.Text,
                District = txtDistrict.Text
            };

            _dbHelper.AddDonor(donor);
            // Console.WriteLine($"Added Donor: {donor.Name},{donor.BloodType}, {donor.Contact}, {donor.Address}");

            LoadDonors();
            MessageBox.Show("Donor added successfully!");
        }


        /*  private void donorGrid_SelectionChanged(object sender, SelectionChangedEventArgs e)
      {
          if (donorGrid.SelectedItem != null)
          {
              selectedDonor = donorGrid.SelectedItem as Donar;

              if (selectedDonor != null) // Ensure it is not null
              {
                  txtName.Text = selectedDonor.Name;
                  txtBloodType.Text = selectedDonor.BloodType;
                  txtContact.Text = selectedDonor.Contact;
                  txtAddress.Text = selectedDonor.Address;
              }
          }
      }
        */


        private void OnUpdateDonar(object sender, RoutedEventArgs e)
        {
            /* if (donorGrid.SelectedItem == null)
             {
                 MessageBox.Show("Please select a donor to update.");
                 return;
             }

             var selectedDonor = donorGrid.SelectedItem as Donar;
             selectedDonor.Name = txtName.Text;
             selectedDonor.BloodType = txtBloodType.Text;
             selectedDonor.Contact = txtContact.Text;
             selectedDonor.Address = txtAddress.Text;

             _dbHelper.UpdateDonor(selectedDonor);  // Update donor details in database
             Console.WriteLine($"Updated Donor: {selectedDonor.Name}, {selectedDonor.BloodType}, {selectedDonor.Contact}, {selectedDonor.Address}");

             LoadDonors();  // Refresh the donor list
            */
            if (selectedDonor != null)
            {
                selectedDonor.Name = txtName.Text;
                //selectedDonor.Age = txtAge.Text;
                selectedDonor.Age = int.Parse(txtAge.Text);
                //selectedDonor.DOB = txtDOB.Text;
                selectedDonor.DOB = DateTime.Parse(txtDOB.Text);
                selectedDonor.Gender = txtGender.Text;
                selectedDonor.BloodType = txtBloodType.Text;
                selectedDonor.Contact = txtContact.Text;
                selectedDonor.Email = txtEmail.Text;
                selectedDonor.Address = txtAddress.Text;
                selectedDonor.City = txtCity.Text;
                selectedDonor.District = txtDistrict.Text;

                _dbHelper.UpdateDonor(selectedDonor);
                LoadDonors();
                MessageBox.Show("Donor updated successfully!");
            }
            else
            {
                MessageBox.Show("Please select a donor to update.");
            }
        }

        private void OnDeleteDonor(object sender, RoutedEventArgs e)
        {
            if (selectedDonor != null)
            {
                _dbHelper.DeleteDonor(selectedDonor.DonorID);
                LoadDonors();
                MessageBox.Show("Donor deleted successfully!");
            }
            else
            {
                MessageBox.Show("Please select a donor to delete.");
            }
            /* if (donorGrid.SelectedItem == null)
             {
                 MessageBox.Show("Please select a donor to delete.");
                 return;
             }

             var selectedDonor = donorGrid.SelectedItem as Donar;
             _dbHelper.DeleteDonor(selectedDonor.DonorID);  // Delete the selected donor from the database

             LoadDonors();  // Refresh the donor list
            */
        }

        private void DonarDetails(object sender, RoutedEventArgs e)
        {
            DonarList donorListWindow = new DonarList();
            donorListWindow.Show();
        }

        private void Cancel(object sender, RoutedEventArgs e)
        {
            Close();
        }
    }
}
