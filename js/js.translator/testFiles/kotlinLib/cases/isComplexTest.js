/*
 * Copyright 2010-2012 JetBrains s.r.o.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var A = Kotlin.createClass();
var B = Kotlin.createClass(A);
var b = new B;
var C = Kotlin.createClass(B);
var c = new C;
var E = Kotlin.createClass(A)
var e = new E;

var test1 = function() {
    var b2 = b
    return (Kotlin.isType(b, A) && Kotlin.isType(b, B));
}

var test2 = function() {
    return (Kotlin.isType(c, C) && Kotlin.isType(c, B) && Kotlin.isType(c, A) && (!Kotlin.isType(c, E)));
}

var test3 = function() {
    return Kotlin.isType(e, E) && !Kotlin.isType(e, B) && !Kotlin.isType(e, C) && Kotlin.isType(e, A)
}

var test = function() {
    return test1() && test2() && test3()
}
