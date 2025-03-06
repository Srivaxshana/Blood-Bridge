using System;
using System.Collections.Generic;
using System.Drawing;
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
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace Blood_Bridge
{
    /// <summary>
    /// Interaction logic for Dashboard.xaml
    /// </summary>
    public partial class Dashboard : Window
    {
       
       
                public Dashboard()
                {
                    InitializeComponent();
                    

                }
        /*
               private void LoadData()
               {
                  productGrid.ItemsSource = _db.Donors.ToList();
               }
               */


        private void Donar(object sender, RoutedEventArgs e)
        {
            OptionPopup.IsOpen = !OptionPopup.IsOpen;
        }
            //Donars DonarWindow = new Donars();
            // DonarWindow.ShowDialog();



         private void Add(object sender, RoutedEventArgs e)
         {
            try
            {
                MessageBox.Show("Reached Add");  // Debugging message
                Donars AddDonarWindow = new Donars();
                AddDonarWindow.ShowDialog(); // Show the Donors window
                MessageBox.Show("Donors window opened successfully");
            }
            catch (Exception ex)
            {
                // Catch any exceptions and show them in a message box
                MessageBox.Show($"An error occurred: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
            
            // AddDonar addDonarwindow = new AddDonar();
            //addDonarwindow.Show();
           /* Donar addDonarweindow = new Donar();
             AddDonar pWindow = new AddDonar(addDonarweindow);
             if (pWindow.ShowDialog() == true)
             {
                 _db.Donors.Add(addDonarweindow);
                 _db.SaveChanges();
                 LoadData();
             }

            using (var context = new BloodBridgeDbContext())
             {
                 var donor = new Donar
                 {
                     Name = "John Doe",
                     Age = 25,
                     BloodGroup = "O+",
                     Contact = "1234567890"
                 };
                 context.Donors.Add(donor);
                 context.SaveChanges();
             }
           */

         }
       



        /* private void Update(object sender, RoutedEventArgs e)
         {
             UpdateDonar updatedonarwindow = new UpdateDonar();
             updatedonarwindow.Show();
         }

         private void Delete(object sender, RoutedEventArgs e)
         {
             DeleteDonar deleteWindow = new DeleteDonar();
             deleteWindow.ShowDialog();
         }
            */

         private void AllDonarDetails(object sender, RoutedEventArgs e)
         {
            try
            {
                MessageBox.Show("Reached AllDonarDetails");  // Debugging message
                DonarList donorListWindow = new DonarList();
                donorListWindow.Show(); // Show the Donors window
                MessageBox.Show("Donorslist window opened successfully");
            }
            catch (Exception ex)
            {
                // Catch any exceptions and show them in a message box
                MessageBox.Show($"An error occurred: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
            
        }
        

        private void Search(object sender, RoutedEventArgs e)
        {

            SearchBlood searchwindow = new SearchBlood();
            searchwindow.Show();
        }

        private void DashboardWindow(object sender, RoutedEventArgs e)
        {
            Dashboard DashboardWindow = new Dashboard();
            DashboardWindow.ShowDialog();
        }

        private void HomeWindow(object sender, RoutedEventArgs e)
        {
            MainWindow HomeWindow = new MainWindow();
            HomeWindow.ShowDialog();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {

        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {

        }
    }
}
