   M S B A M L   `   `   `  ����G  CBlood_Bridge, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null+clr-namespace:Blood_BridgeBlood_Bridge  5   	   %    Blood_Bridge.Blood_Details_Edit   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   ,localclr-namespace:Blood_Bridge     5   	     � Title$  Blood_Details_Edit��5   	   $	��400��6$   $	��450��61    � WindowStartupLocation$ CenterScreen=�5	   	   .��5
      � $	��Top=�6   $	��440��6$   .+�5   
   �� $��            Blood Details��6   $��30(�64   
���  ��$
��Bold"�6S   $��Center=�6e   $	��Top=�6�   $��81��6�   $	��400��6�   �� 5   
   $��20,40,20,87q�6   .+�5      ��  �� Orientation$ 
Horizontal=�6   $	��0,5q�62   .+�5      �� $��
Blood Type��6   $��14(�6-   $��Center=�6;   $	��100��6V   �� 5      -   5         ��Name$ BloodTypeTextBox��5      $	��250��64   5      �� 5      $ 
Horizontal=�6   $	��0,5q�62   .+�5      �� $��Quantity��6   $��14(�6+   $��Center=�69   $	��100��6T   �� 5      -   5        $ QuantityTextBox��5      $	��250��63   5      5      &   System.Windows.Controls.DataGrid  5   
   -   5          Name$ 	bloodGrid��5      $��119,143,118,155q�6&      AutoGenerateColumns$ False��5         Columns 5      0  *System.Windows.Controls.DataGridTextColumn  5!      ,  &System.Windows.Controls.DataGridColumn   Header$ Blood Type ��6%      Width5  /System.Windows.Controls.DataGridLengthConverter$ 90 6X   1  +System.Windows.Controls.DataGridBoundColumn	   Binding	 6:   �� *	BloodType+6X     5"      $ Quantity��6%   $ 90 6T   	 67   �� *
Quantity+6T   5'      �� 5*   
   -   5        $��Cancel��5*      
�������
���  ��$
��Bold"�6F   $	��100��6X   $��40��6d   $��320,287,0,107q�6p   $
��Left=�6�   6�   �� 5+   
   -   5        $��Add/Update Blood��5+      
�������
���  ��$
��Bold"�6P   $	��118��6b   $��40��6n   $��25,290,0,110q�6z   $
��Left=�6�   6�   �� 5,   
   -   5        $��Delete Blood��5,      
�������
���  ��$
��Bold"�6L   $	��100��6^   $��40��6j   $��180,287,0,107q�6w   $
��Left=�6�   6�   5.      5/      