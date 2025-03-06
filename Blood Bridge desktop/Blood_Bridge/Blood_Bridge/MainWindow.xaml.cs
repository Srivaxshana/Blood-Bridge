﻿using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Blood_Bridge
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void login(object sender, RoutedEventArgs e)
        {
            /*login myControl = new login();
            this.Content = myControl;*/

            
             Login loginWindow = new Login();
             loginWindow.ShowDialog();
            
        }

        private void signup(object sender, RoutedEventArgs e)
        {
            Signup signupWindow = new Signup();
            signupWindow.ShowDialog();
        }

        private void Home(object sender, RoutedEventArgs e)
        {
           
        }

        private void About(object sender, RoutedEventArgs e)
        {
            Dashboard dashboardWindow = new Dashboard();
            dashboardWindow.ShowDialog();
        }
    }

    
    
}