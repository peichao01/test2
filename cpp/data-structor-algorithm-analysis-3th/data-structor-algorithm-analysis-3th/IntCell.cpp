//
//  IntCell.cpp
//  data-structor-algorithm-analysis-3th
//
//  Created by LongKui on 14-5-15.
//  Copyright (c) 2014年 LongKui. All rights reserved.
//

#include "IntCell.h"

class IntCell
{
public:
    IntCell()
    {
        storedValue = 0;
    }
    IntCell(int initialValue)
    {
        storedValue = initialValue;
    }
    int read()
    {
        return storedValue;
    }
    void write(int x)
    {
        storedValue = x;
    }
private:
    int storedValue;
};