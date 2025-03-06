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
    /// Interaction logic for SearchBlood.xaml
    /// </summary>
    public partial class SearchBlood : Window
    {
        public SearchBlood()
        {
            InitializeComponent();
        }

        private void Search(object sender, RoutedEventArgs e)
        {

        }

        private void Cancel(object sender, RoutedEventArgs e)
        {
            this.Close();
        }
    }
}
