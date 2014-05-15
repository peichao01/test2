//
//  1.3.1.cpp
//  data-structor-algorithm-analysis-3th
//
//  Created by LongKui on 14-5-14.
//  Copyright (c) 2014年 LongKui. All rights reserved.
//

#include <iostream>

#include "1.3.1.h"

int f(int x)
{
    if(x == 0)
        return 0;
    else
        return 2 * f(x - 1) + x * x;
}

void test_1_3_1()
{
    int r = f(5);
    std::cout << r << std::endl;
}