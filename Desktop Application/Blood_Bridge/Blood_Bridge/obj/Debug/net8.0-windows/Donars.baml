   M S B A M L   `   `   `  ����G  CBlood_Bridge, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null+clr-namespace:Blood_BridgeBlood_Bridge  5   	       Blood_Bridge.Donars   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   ,localclr-namespace:Blood_Bridge     5   	     � Title$  Donars��5   	   $	��450��6   $	��800��6%    � WindowStartupLocation$ CenterScreen=�5	   	   .��5
      � .+�5   
   �� $��              Edit Donars��6   $��30(�64   
���  ��$
��Bold"�6S   $��Center=�6e   $	��Top=�6�   $��81��6�   $	��400��6�   �� 5   
   $��20 40 20 20q�6   .+�5      ��  �� Orientation$ 
Horizontal=�6   .+�5      �� $ Vertical=�6   $��10q�64   .+�5      �� $ 
Horizontal=�6!   $	��0,5q�6:   .+�5      �� $
��Name��6    $��14(�6/   $��Center=�6=   $	��100��6X   �� 5      -   5         ��Name$ txtName��5   "   $	��250��63   5      �� 5      $ 
Horizontal=�6!   $	��0,5q�6:   .+�5      �� $��
Blood Type��6    $��14(�65   $��Center=�6C   $	��100��6^   �� 5      -   5        $ txtBloodType��5   "   $	��250��68   5       5$      �� 5%      $ Vertical=�6   $��10q�64   .+�5'      �� $ 
Horizontal=�6!   $	��0,5q�6:   .+�5(      �� $��
Contact No��6    $��14(�65   $��Center=�6C   $	��100��6^   �� 5)      -   5        $ 
txtContact��5)   "   $	��250��66   5*      �� 5.      $ 
Horizontal=�6!   $	��0,5q�6:   .+�5/      �� $��Address��6    $��14(�62   $��Center=�6@   $	��100��6[   �� 50      -   5        $ 
txtAddress��50   "   $	��250��66   51      59      5:      5;      �� 5=   
   -   5        $��Cancel��5=      
�������
���  ��$
��Bold"�6F   $	��100��6X   $��40��6d   $��650,350,0,0q�6p   $
��Left=�6�   6�   �� 5>   
   -   5        $��	Add Donor��5>      
�������
���  ��$
��Bold"�6I   $	��100��6[   $��40��6g   $��
50,350,0,0q�6s   $
��Left=�6�   6�   �� 5?   
   -   5        $��Update Donor��5?      
�������
���  ��$
��Bold"�6L   $	��100��6^   $��40��6j   $��200,350,0,0q�6v   $
��Left=�6�   6�   �� 5@   
   -   5        $��Delete Donor��5@      
�������
���  ��$
��Bold"�6L   $	��100��6^   $��40��6j   $��350,350,0,0q�6v   $
��Left=�6�   6�   �� 5A   
   -	   5        $��Donor Details��5A      
�������
���  ��$
��Bold"�6M   $	��100��6_   $��40��6k   $��500,350,0,0q�6w   $
��Left=�6�   6�   &   System.Windows.Controls.DataGrid  5G   
   -
   5          Name$ 	donorGrid��5G      $��66,181,66,67q�6&      AutoGenerateColumns$ False��5H         Columns 5I      0  *System.Windows.Controls.DataGridTextColumn  5J      ,  &System.Windows.Controls.DataGridColumn   Header$ ID��6%      Width5  /System.Windows.Controls.DataGridLengthConverter$ 50 6M   1  +System.Windows.Controls.DataGridBoundColumn	   Binding	 61   �� *	DonorID+6M     5K      $
 Name��6%   $	 150 6L   	 63   �� *Name+6L     5L      $ Blood Type ��6%   $	 100 6X   	 6:   �� *	BloodType+6X     5M      $ 
Contact No��6%   $	 150 6U   	 69   �� *	Contact+6U     5N      $ Address��6%   $	 200 6R   	 66   �� *	Address+6R   5R      5T      5U      