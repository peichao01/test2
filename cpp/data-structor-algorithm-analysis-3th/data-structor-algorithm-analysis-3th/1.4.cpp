//
//  1.4.cpp
//  data-structor-algorithm-analysis-3th
//
//  Created by LongKui on 14-5-15.
//  Copyright (c) 2014年 LongKui. All rights reserved.
//

#include <stdio.h>
#include "1.4.h"

//using std::

void printOut(int n)
{
    if(n >= 10)
        printOut(n / 10);
    printDigit(n % 10);
};
void printDigit(int n)
{
    std::cout << n;
};

void test_1_4()
{
    printOut(74737);
    std::cout << std::endl;
};