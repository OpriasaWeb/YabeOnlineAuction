# Yabe Online Auction

Yabe Online Auction requires its sellers to post items for sale for a six-week period during which the price of any unsold item drops 12 percent each week. For example, an item that costs $10.00 during the first week costs 12 percent less, or $8.80 during the second week. In the third week, the same item is 12 percent less than $8.80, or $7.74. And if the week is equals to 10, make the unsold product free.

Design an application that allows a user to input prices until an appropriate sentinel value is entered. Program output is the price of each item during each week, one through six.


Psuedocode:
          var sale = 0.12;
          var quit = 0;  
          var weeks = 7;

          if weeks != quit
            var calculateWeeks = 1;
            var currentPrice = 0;

            if weeks == 10
              currentPrice = 0;
            else
              var price = 10.00;
              currentPrice = price - (price * 0.12);

              while calculateWeeks <  weeks
                currentPrice = currentPrice - (currentPrice * 0.12);
                calculateWeeks++;

              endwhile

            endelse

          endif
          
          if currentPrice == 10
            message: It's totally free!
          else
            message: total price - currentPrice
          endelse