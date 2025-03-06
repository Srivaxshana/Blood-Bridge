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

namespace Blood_Bridge
{
    /// <summary>
    /// Interaction logic for Signup.xaml
    /// </summary>
    public partial class Signup : Window
    {
        public Signup()
        {
            InitializeComponent();
        }

        private void Cancel(object sender, RoutedEventArgs e)
        {
            this.Close();
        }
        
        private void signup(object sender, RoutedEventArgs e)
        {
            if (UserName.Text != string.Empty && Password.Password != string.Empty && Email.Text != string.Empty && Phonenumber.Text != string.Empty)
            {
                MessageBox.Show("Signup successful");
            }
            else
            {
                MessageBox.Show("Invalid");
            }

        }

        private void CloseWindow(object sender, RoutedEventArgs e)
        {
            Application.Current.Shutdown();
        }
    }
}
