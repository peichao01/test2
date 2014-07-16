//
//  AppDelegate.swift
//  test-swift
//
//  Created by LongKui on 14-6-23.
//  Copyright (c) 2014年 LongKui. All rights reserved.
//

import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
                            
    var window: UIWindow?


    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: NSDictionary?) -> Bool {
        self.window = UIWindow(frame: UIScreen.mainScreen().bounds)
        // Override point for customization after application launch.
        self.window!.backgroundColor = UIColor.whiteColor()
        self.window!.makeKeyAndVisible()
        
        let str = "Hello, world!";
        let times = 4;
        let times2 = 8;
        
        println(str + String(times) + " - \(times2)");
        
        var shoppingList = ["catfish","water","tulips","blue paint"];
        shoppingList[1] = "bottle of water";
        
        var occupations = [
            "Malcolm":"Captain",
            "Kaylee":"Mechanic"
        ]
        
        occupations["Jayne"] = "Public Relations"
        
//        println(String(occupations))
        
        let emptyArray = String[]()
        let emptyDictionary = Dictionary<String, Float>()
        
        let individualScores = [75, 43, 103, 87, 12]
        var teamScore = 0
        for score in individualScores{
            if score > 50{
                teamScore += 3
            } else {
                teamScore += 1
            }
        }
        
        println(String(teamScore))
        
        var optionalString: String? = "Hello"
        println(String(optionalString == nil))
        println(optionalString)
        
        var optionalName:String? = "John Appleseed"
        optionalName = nil
        var greeting = "Hello!"
        if let name = optionalName {
            greeting = "Hello, \(name)"
        }
        
        println(greeting)
        
        
        let vegetable = "red pepper"
        var vegetableComment:String
        switch vegetable {
            case "celery":
                vegetableComment = "Add some raisins and make ants on a log."
            case "cucumber","watercress":
                vegetableComment = "That would make a good tea sandwich."
            case let x where x.hasSuffix("pepper"):
                vegetableComment = "Is it a spicy\(x)?"
            default:
                vegetableComment = "Everything tasts good in soup."
        }
        
        println(vegetableComment)
        
        
        let interestingNumbers = [
            "Prime": [2, 3, 5, 7, 11, 13],
            "Fibonacci": [1,1,2,3,5,8],
            "Square":[1,4,9,16,25]
        ]
        
        var largest = 0
        for(kind, numbers) in interestingNumbers {
            for number in numbers{
                if number > largest{
                    largest = number
                }
            }
        }
        println("largest number is: \(largest)")
        
        
        var firstForLoop = 0
        for i in 0..3 {
            firstForLoop += i
        }
        println("\(firstForLoop)")
        
        var secondForLoop = 0
        for var i = 0; i < 3; ++i {
            secondForLoop += i
        }
        println(String(secondForLoop))
        
        
        
        func greet(name: String, day: String) -> String {
            return "Hello \(name), today is \(day)."
        }
        let r = greet("Bob", "Tuesday")
        println(r)
        
        
        func sumOf(numbers: Int...) -> Int{
            var sum = 0
            for number in numbers{
                sum += number
            }
            return sum
        }
        
        println("\(sumOf())")
        println("\(sumOf(42, 597, 12))")
        
        
        func returnFifteen()->Int{
            var y = 10
            func add(){
                y+=5
            }
            add()
            return y
        }
        println("\(returnFifteen())")
        
        
        func makeIncrementer()->(Int->Int){
            func addOne(number:Int)->Int{
                return 1+number
            }
            return addOne
        }
        var increment = makeIncrementer()
        println("\(increment(7))")
        
        
        func hasAnyMatches(list: Int[], condition: Int->Bool)->Bool{
            for item in list{
                if condition(item){
                    return true
                }
            }
            return false
        }
        func lessThanTen(number:Int)->Bool{
            return number < 10
        }
        var numbers = [20, 19, 7, 12]
        println("\(hasAnyMatches(numbers, lessThanTen))")
        
        
        
        return true
    }

    func applicationWillResignActive(application: UIApplication) {
        // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
        // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
    }

    func applicationDidEnterBackground(application: UIApplication) {
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    }

    func applicationWillEnterForeground(application: UIApplication) {
        // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
    }

    func applicationDidBecomeActive(application: UIApplication) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    }

    func applicationWillTerminate(application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }


}

