#include <lib.h>

std::string calculate(float f_number, double d_number, int i_number, std::string str) {
    return std::to_string(f_number * 2) + ' ' + std::to_string(d_number / 2) + ' ' + std::to_string(i_number + 2) + ' ' + str;
}